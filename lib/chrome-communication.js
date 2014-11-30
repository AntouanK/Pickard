
'use strict';

var log           = require('consologger'),
    prettyTime    = require('pretty-hrtime'),
    http          = require('http'),
    WebSocket     = require('ws'),
    spawn         = require('child_process').spawn,
    API           = {},
    chromePath    = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
    liveChildren  = [],
    locateServer;


locateServer = function(port, interval){

  var deferred  = Promise.defer(),
      done      = false,
      makeRequest,
      requestOptions;


  if(isNaN(port)){
    deferred.reject(new Error('port argument is not a number'));
  }

  if(isNaN(interval)){
    interval = 200;
  }

  requestOptions = {
    method: 'GET',
    hostname: 'localhost',
    path: '/json/list',
    port: port
  };

  makeRequest = function(){

    if(done){
      return false;
    }

    //  hit localhost:PORT/json/list to get the list of available
    //  pages/tabs to connect to.
    var req =
    http
    .request(requestOptions, function(res) {

      var body = '';

      res.on('data', function(chunk){
        body += chunk;
      });

      res.on('end', function(){

        done = true;

        deferred
        .resolve(JSON.parse(body));
      });

    });

    req
    .on('error', function(err){
      // ignore ECONNREFUSED
      if(err.code !== 'ECONNREFUSED' && err.code !== 'ECONNRESET'){
        deferred
        .reject(err);
      } else {
        makeRequest();
      }
    });

    if(!done){
      req
      .setTimeout(interval, function(){
        req.abort();
        makeRequest();
      });
    }

    req.end();
  };

  makeRequest();

  return deferred.promise;
};

API.openSocket = function(wsURL){

  var ws = new WebSocket(wsURL),
  write,
  id = 0,
  callbackRegistry = {};

  write = function(message){

    var deferred = Promise.defer();
    message.id = id += 1;

    ws.send(JSON.stringify(message));

    callbackRegistry[id] = deferred;

    return deferred.promise;
  };

  ws.on('open', function open() {

    write({ method: 'Runtime.enable'});
    write({ method: 'DOM.enable'});
    write({ method: 'CSS.enable'});

    write({
      method: 'Runtime.evaluate',
      params: {
        expression: 'window.location.href = \'http://www.consumerbarometer.com\';',
        objectGroup: 'console',
        includeCommandLineAPI: true,
        doNotPauseOnExceptionsAndMuteConsole: false,
        contextId: 1,
        returnByValue: false,
        generatePreview: true
      }
    });


    setTimeout(function(){
      write({
        method: 'Runtime.evaluate',
        params: {
          expression: 'document.querySelector(\'nav-bar\')'
        }
      });

      write({
        method: 'Runtime.evaluate',
        params: {
          expression: 'document.querySelector(\'nav-bar\').outerHTML'
        }
      });

      write({
        method: 'Runtime.evaluate',
        params: {
          expression: 'document.title;'
        }
      })
      .then(function(result){
        log.info('title is', result);
      });

    }, 4000);

  });

  ws.on('message', function(data, flags) {
    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.

    var dataJSON;

    try {
      dataJSON = JSON.parse(data);
    } catch (e) {
      //  not JSON
    }

    if(dataJSON !== undefined){
      log.data('===================\n', dataJSON);

      log.verbose('dataJSON', dataJSON.id);
      log.verbose(callbackRegistry);
      if(!isNaN(dataJSON.id) && callbackRegistry[dataJSON.id] !== undefined){
        callbackRegistry[dataJSON.id]
        .resolve(dataJSON.result);

        delete callbackRegistry[dataJSON.id];
      }

    }
  });
};


API.debug = function(config){

  log.verbose('debug');
  http
  .get('http://localhost:' + config.port + '/json/list', function(res) {
    var body = '';

    res.on('data', function(chunk){
      body += chunk;
    });

    res.on('end', function(){

      var wsURL = JSON.parse(body)[0].webSocketDebuggerUrl;
      log.verbose('wsURL', wsURL);

      API.openSocket(wsURL);
    });

  })
  .on('error', function(e) {
    //  error
  });
};


API.launch = function(config){

  var chromeApp,
      args,
      debugPort = config.port,
      timeAppLaunch,
      timeAppReady;

  args =
  [
    '--remote-debugging-port=' + debugPort,
    '--user-data-dir=remote-profile',
    '--no-first-run'
  ];

  if(typeof config.address === 'string'){
    args.push(config.address);
  }

  timeAppLaunch = process.hrtime();
  chromeApp =
  spawn(chromePath, args);

  //  keep all the live children in an array to kill them later. \../
  liveChildren
  .push(chromeApp);

  chromeApp
  .stdout
  .on('data', function(data) {
    log.data('stdout: ' + data);
  });

  chromeApp
  .stderr
  .on('data', function(data) {
    log.error('stderr: ' + data);
  });

  chromeApp
  .on('close', function(code) {
    log.verbose('child process exited with code ' + code);
  });


  locateServer(config.port)
  .then(function(tabsList){
    timeAppReady = process.hrtime(timeAppLaunch);
    log.info('chrome launched in', prettyTime(timeAppReady));

    log.data(tabsList);
  })
  .catch(function(err){
    log.error(err);
  });
};

//  generic exit function
API.exit = function(){
  //  kill every one
  liveChildren
  .forEach(function(proc){
    proc.kill();
  });
};

module.exports = API;
