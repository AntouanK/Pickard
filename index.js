/*
  Pickard module
  @antouank 2014
*/


'use strict';

var Pickard,
    chromeCommunication = require('./lib/chrome-communication'),
    log = require('consologger'),
    PORT = 9500;


//  main Pickard object
Pickard = function(){

  var thisPickard = this;


  //  increments on every Runtime.executionContextCreated event
  this.contextId = 0;

  //  ------------------------------------------------------ Pickard.showDebug
  thisPickard.showDebug = false;

  //  ------------------------------------------------------ Pickard.config
  thisPickard.config = {
    port: PORT
  };


  //  ------------------------------------------------------ Pickard.onPageLoad
  thisPickard.generateLoadPromise = function(){

    thisPickard.pageLoadDeferred = Promise.defer();
    thisPickard.pageLoadDeferred._timestamp = Date.now();

    thisPickard.pageLoadDeferred
    .promise
    .then(function(){
      thisPickard.generateLoadPromise();
    });
  };
  //  first load event promise is born!
  thisPickard.generateLoadPromise();
  //  ------------------------------------------------------ Pickard.getNextPageLoad
  thisPickard.getNextPageLoad = function(){
    return thisPickard.pageLoadDeferred.promise;
  };


  //  ------------------------------------------------------ Pickard.openPage
  //  open a page and get the .websocket and .evaluate functions on 'this'
  thisPickard.openPage = function(address){

    return chromeCommunication
    .launch({
      port: thisPickard.config.port,
      address: address
    })
    .then(function(debugTab){

      //  ------------------------------------------------------ Pickard.websocket
      //  .websocket
      thisPickard.websocket = debugTab.webSocketDebuggerUrl;

      //  here comes .evaluate .ws and .write
      var promise =
      chromeCommunication
      .openSocket(thisPickard, thisPickard.websocket);

      promise
      .then(chromeCommunication.prepareSocket)
      .then(function(){
        thisPickard.showDebug && log.info('socket prepared');
      })
      .catch(function(err){
        log.error(err);
      });

      return promise;
    })
    .catch(function(err){
      throw err;
    });
  };


  //  ------------------------------------------------------ Pickard.exit
  thisPickard.exit = function(){
    chromeCommunication.exit();
  };

  return thisPickard;
};


process
.on('exit', function() {
  chromeCommunication.exit();
});

//  expose the module
module.exports = Pickard;
