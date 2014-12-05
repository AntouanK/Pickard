
'use strict';

var Pickard,
    chromeCommunication = require('./lib/chrome-communication'),
    portSeed = 9500;



Pickard = function(){

  var thisPickard = this,
      loadDeferred = Promise.defer();


  //  ------------------------------------------------------ Pickard.showDebug
  thisPickard.showDebug = false;

  //  ------------------------------------------------------ Pickard.config
  thisPickard.config = {
    port: portSeed
  };

  //  ------------------------------------------------------ Pickard.whenLoad
  //  promise for "load" event
  thisPickard.whenLoad = loadDeferred.promise;


  //  ------------------------------------------------------ Pickard.openPage
  //  open a page and get the .websocket and .evaluate functions on 'this'
  thisPickard.openPage = function(address){

    return chromeCommunication
    .launch({
      port: thisPickard.config.port,
      address: address
    })
    .then(function(debugTab){

      //  -------------------------------------------------- Pickard.websocket
      //  .websocket
      thisPickard.websocket = debugTab.webSocketDebuggerUrl;

      //  here comes .evaluate .ws and .write
      var promise =
      chromeCommunication
      .openSocket(thisPickard, thisPickard.websocket);

      promise
      .then(chromeCommunication.prepareSocket)
      .catch(function(err){
        console.log(err);
      });

      return promise;
    })
    .then(function(){

      console.log('evaluate');
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


module.exports = Pickard;
