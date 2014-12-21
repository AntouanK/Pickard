/*
  Pickard module
  @antouank 2014
*/

'use strict';

var log                 = require('consologger'),
    prettyTime          = require('pretty-hrtime'),
    http                = require('http'),
    WebSocket           = require('ws'),
    chromeParseMessage  = require('./chrome-parseMessage'),
    prepareSocket       = require('./chrome-prepareSocket'),
    checkPageState      = require('./chrome-checkPageState'),
    API                 = {},
    chromePath,
    liveChildren        = [],
    locateServer,
    parseMessage,
    // checkAddress,
    MAX_RETRIES         = 200;

//  Chrome path
if(process.platform === 'darwin'){
  chromePath = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';
} else if(process.platform === 'linux'){
  chromePath = '/usr/bin/google-chrome';
} else if(process.platform === 'win32'){
  chromePath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
} else {
  throw new Error('unsupported platform!');
}

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

    // log.data('makeRequest', port, done, retries, MAX_RETRIES);
    if(done){
      return false;
    }

    if(retries > MAX_RETRIES){
      // log.error('MAX RETRIES reached!');
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
    .on('error', function(){

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
      callbackRegistry  = {},
      contextReady      = Promise.defer(),
      pageLoadDeferred  = Promise.defer(),
      write,
      messageParser;


  //  function to write a message on the socket
  write = function(message){

    var writeDeferred = Promise.defer(),
        timeWriteSend = process.hrtime();

    //  set the id of the message
    message.id = id += 1;

    thisPickard.showDebug && log.verbose('[write]', message);

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

  //  -------------------------------------------------- Pickard.ws
  thisPickard.ws = ws;
  //  -------------------------------------------------- Pickard.write
  thisPickard.write = write;
  //  -------------------------------------------------- Pickard.contextReady
  thisPickard.contextReady = contextReady;


  //  when the socket is ready, initialize chrome debugger stuff
  ws.on('open', function open() {

    //  -------------------------------------------------- Pickard.evaluate
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
            contextId: thisPickard.contextId,
            returnByValue: true
          }
        });
      });
    };

    //  -------------------------------------------------- Pickard.evaluateFn
    thisPickard.evaluateFn = function(fn){

      if(typeof fn !== 'function'){
        throw new Error('evaluateFn takes a function as an argument!');
      }

      if(thisPickard.showDebug){
        log.verbose('[evaluate]', fn + '');
      }

      return thisPickard
      .evaluate('(' + fn + ')()');
    };

    deferred.resolve(thisPickard);
  });


  //  make the messageParser for this Pickard instance
  messageParser = chromeParseMessage(thisPickard);

  ws.on('message', function(data/*, flags*/) {

    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.
    var message;
    try {
      message = JSON.parse(data);
    } catch (e) {
      throw new Error('message it not JSON!');
      //  not JSON
    }

    if(message !== undefined){

      messageParser(message);

      if(!isNaN(message.id) && callbackRegistry[message.id] !== undefined){

        callbackRegistry[message.id]
        .resolve(
          parseMessage(
            message.result
          )
        );

        delete callbackRegistry[message.id];
      }
    }
  });

  deferred.promise
  .then(function(){
    //  run some page checks that the parser might not catch initially
    checkPageState(thisPickard);
  });

  return deferred.promise;
};


//  prepare the websocket and the debugger
API.prepareSocket = prepareSocket;


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
    '--no-first-run'
  ];

  //  what about the profile folder in different OSes?
  //  OSX:
  if(process.platform === 'darwin'){
    args.push('--user-data-dir=/tmp/Google/Chrome/Default/');
  }

  if(typeof config.address === 'string'){
    args.push(config.address);
  }

  if(Array.isArray(config.windowSize)){
    args.push('--window-size=' + config.windowSize.join(','));
  }

  if(Array.isArray(config.windowPosition)){
    args.push('--window-position=' + config.windowPosition.join(','));
  }

  timeAppLaunch = process.hrtime();

  //  spawn the Chrome executable
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


  log.verbose('locateServer(config.port)', config.port);
  locateServer(config.port)
  .then(function(tabsList){

    if(tabsList === undefined){
      deferred.reject(new Error('no tabs list returned!'));
    }

    timeAppReady = process.hrtime(timeAppLaunch);
    log.info('chrome launched in', prettyTime(timeAppReady));

    tabsList
    .some(function(tab){

      if(tab.type === 'page' && tab.url.match(config.address)){
        //log.data('tab resolving', tab);
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


/*
    websocket responses structure
  {
    id: 123,   //  the id of the request
    result: {
      result: {
        type: "string",
        value: "some value in here as a string"
      }
    }
  }
    push notification examples
  {
    method: "Debugger.scriptParsed",
    params: {
      scriptId: "1533",
      url: "https://c.go-mpulse.net/boomerang/config.js?key=SGE7P-67SSM-8NM2N-3BP9W-P5LKC&d=www.betfair.com&t=4726269&v=0.9.1406564410&if=&sl=1&si=88fffeb7-5319-4d8b-9bd8-2a46446cf273-ng63e5&r=&bcn=%2F%2F36c3feee.mpstat.us%2F",
      startLine: 0,
      startColumn: 0,
      endLine: 0,
      endColumn: 124
    }
  }
    when navigating to another Page
  {
    method: "Page.frameDetached",
    params: {
      frameId: "12464.17"
    }
  }

*/
parseMessage = function(messageResult){

  if(messageResult === undefined || messageResult.result === undefined){
    return undefined;
  }

  //  if the result contains a string value, return it
  if(messageResult.result.type === 'string'){

    //  check that it is a string value
    if(typeof messageResult.result.value !== 'string'){
      throw new Error('expected messageResult.result.value to be a string!');
    }

    if(messageResult.result.wasThrown){
      log.error('Error:' + messageResult.result.value);
    }

    return messageResult.result.value;
  }
  else {  //  if it's not a string, return the result as is

    return messageResult.result;
  }

};


//  expose the API
module.exports = API;
