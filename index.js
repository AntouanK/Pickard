
'use strict';

var Pickard,
    chromeCommunication = require('./lib/chrome-communication'),
    portSeed = 9500;



Pickard = function(){

  var thisPickard = this,
      loadDeferred = Promise.defer();

  thisPickard.config = {
    port: portSeed
  };

  //  promise for "load" event
  thisPickard.whenLoad = loadDeferred.promise;

  //  open a page and get the .websocket and .evaluate functions on 'this'
  thisPickard.openPage = function(address){

    return chromeCommunication
    .launch({
      port: thisPickard.config.port,
      address: address
    })
    .then(function(debugTab){

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
