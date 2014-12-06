
/*

  TODO:

  - navigator.onLine
  check if onLine



*/


'use strict';

var log           = require('consologger'),
    prettyTime    = require('pretty-hrtime'),
    http          = require('http'),
    WebSocket     = require('ws'),
    API           = {},
    chromePath    = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
    liveChildren  = [],
    locateServer,
    parseMessage,
    // checkAddress,
    MAX_RETRIES   = 30;


//  function to find the URL in the tabs JSON list
// checkAddress = function(url, jsonArray){
//
//   var wantedTab = false;
//
//   jsonArray
//   .some(function(tab){
//
//     //  if this tab is a page...
//     if(tab.type === 'page'){
//
//       //  check if the URL matches
//       if(tab.url.match(url) !== null){
//         wantedTab = tab;
//         //  exit
//         return true;
//       }
//     }
//
//     return false;
//   });
//
//   return wantedTab;
// };


locateServer = function(port, interval){

  var deferred  = Promise.defer(),
      done      = false,
      retries   = 0,
      makeRequest,
      requestOptions;


  if(isNaN(port)){
    deferred.reject(new Error('port argument is not a number'));
  }

  if(isNaN(interval)){
    interval = 300;
  }

  requestOptions = {
    method: 'GET',
    hostname: 'localhost',
    path: '/json/list',
    port: port
  };


  makeRequest = function(){

    log.data('makeRequest', port, done, retries, MAX_RETRIES);
    if(done){
      return false;
    }

    if(retries > MAX_RETRIES){
      log.error('MAX RETRIES reached!');
      deferred.reject('too many retries');
      return false;
    }

    retries += 1;

    //  hit localhost:PORT/json/list to get the list of available
    //  pages/tabs to connect to.
    var req =
    http
    .request(requestOptions, function(res) {

      done = true;
      var body = '';

      res.on('data', function(chunk){
        body += chunk;
      });

      res.on('end', function(){

        //  resolve the promise with the JSON tabs array
        deferred
        .resolve(JSON.parse(body));
      });

    });

    req
    .on('error', function(err){
      // ignore errors
      log.error('[makeRequest]', err.message);

      setTimeout(function(){
        req.abort();
        makeRequest();
      }, interval);
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


//  open the connection to the websocket and attach some functions to the
//  object given ( like evaluate )
API.openSocket = function(thisPickard, wsURL){

  if(thisPickard === undefined){
    throw new Error('no Pickard instance given');
  }

  if(typeof wsURL !== 'string'){
    throw new Error('openSocket argument is not a websocket address');
  }

  var ws                = new WebSocket(wsURL),
      id                = 0,
      deferred          = Promise.defer(),
      contextReady      = Promise.defer(),
      callbackRegistry  = {},
      pageLoadDeferred  = Promise.defer(),
      contextCreated,
      loadEventFired,
      write;


  //  function to write a message on the socket
  write = function(message){

    var writeDeferred = Promise.defer(),
        timeWriteSend = process.hrtime();

    message.id = id += 1;

    ws.send(JSON.stringify(message));

    callbackRegistry[id] = writeDeferred;

    writeDeferred.promise
    .then(function(){

      if(thisPickard.showDebug){
        var timeWriteRespond = process.hrtime(timeWriteSend);
        log.info('response ' + message.id + ' took', prettyTime(timeWriteRespond));
      }

    });

    return writeDeferred.promise;
  };


  thisPickard.ws = ws;
  thisPickard.write = write;
  thisPickard.contextReady = contextReady;
  thisPickard.onPageLoad = pageLoadDeferred.promise;

  //  when the socket is ready, initialize chrome debugger stuff
  ws.on('open', function open() {

    thisPickard.evaluate = function(expression){

      return contextReady.promise
      .then(function(){

        //  return the promise after sending that "Runtime.evaluate" command
        return write({
          method: 'Runtime.evaluate',
          params: {
            expression: expression,
            objectGroup: 'console',
            includeCommandLineAPI: true,
            doNotPauseOnExceptionsAndMuteConsole: false,
            contextId: 1,
            returnByValue: false,
            generatePreview: false
          }
        });
      });
    };

    deferred.resolve(thisPickard);
  });


  ws.on('message', function(data/*, flags*/) {
    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.
    var dataJSON;

    try {
      dataJSON = JSON.parse(data);
    } catch (e) {
      //  not JSON
    }

    if(dataJSON !== undefined){

      if(thisPickard.showDebug){
        log.data('=====[debug]=====\n', dataJSON);
      }

      if(!contextCreated && dataJSON.method === 'Runtime.executionContextCreated'){

        log.warning('contextReady');
        contextReady.resolve();
        contextCreated = true;

      } else if(!loadEventFired && dataJSON.method === 'Page.loadEventFired'){

        log.warning('loadEventFired');
        pageLoadDeferred.resolve();
        loadEventFired = true;

      }

      if(!isNaN(dataJSON.id) && callbackRegistry[dataJSON.id] !== undefined){

        callbackRegistry[dataJSON.id]
        .resolve(dataJSON.result);

        delete callbackRegistry[dataJSON.id];
      }
    }
  });

  return deferred.promise;
};


//  prepare the websocket and the debugger
API.prepareSocket = function(thisPickard){

  var deferred = Promise.defer();


  thisPickard.write({ method: 'Console.enable'});
  thisPickard.write({ method: 'Network.enable'});
  thisPickard.write({ method: 'Page.enable'});
  thisPickard.write({ method: 'Runtime.enable'});
  thisPickard.write({ method: 'DOM.enable'});
  thisPickard.write({ method: 'CSS.enable'});

  deferred.resolve(thisPickard);

  return deferred.promise;
};


//  launch the chrome process, by specifying a port to listen to the dubugger to,
//  and optionally, an address to navigate to
API.launch = function(config){

  var chromeApp,
      args,
      spawn     = require('child_process').spawn,
      deferred  = Promise.defer(),
      debugPort = config.port,
      timeAppLaunch,
      timeAppReady;

  args =
  [
    '--remote-debugging-port=' + debugPort,
    '--user-data-dir="~/Library/Application\ Support/Google/Chrome/Default/"',
    '--no-first-run'
  ];

  if(typeof config.address === 'string'){
    args.push(config.address);
  }

  timeAppLaunch = process.hrtime();
  chromeApp =
  spawn(chromePath, args, { uid: 501 });

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


  log.verbose('locateServer(config.port)', config.port);
  locateServer(config.port)
  .then(function(tabsList){

    timeAppReady = process.hrtime(timeAppLaunch);
    log.info('chrome launched in', prettyTime(timeAppReady));

    tabsList
    .some(function(tab){

      if(tab.type === 'page' && tab.url.match(config.address)){
        log.data('tab resolving', tab);
        deferred.resolve(tab);
        return true;
      }
    });
  })
  .catch(function(err){
    log.error('[API.launch -> locateServer]', err);
    deferred.reject(err);
  });

  return deferred.promise;
};


//  generic exit function
API.exit = function(){
  log.warning('chrome-communication.exit();');
  //  kill every one
  liveChildren
  .forEach(function(proc){

    if(proc === undefined || typeof proc.kill !== 'function'){
      log.error('process does not exist anymore!');
      return true;
    }
    proc.kill();
  });
};


parseMessage = function(data){

};


//  expose the API
module.exports = API;
