
'use strict';

var roboChrome,
    chromeCommunication = require('./lib/chrome-communication'),
    portSeed = 9400;



roboChrome = function(){

  var thisRoboChrome = this;

  thisRoboChrome.config = {
    port: portSeed += 1
  };

  thisRoboChrome.openPage = function(address){

    return chromeCommunication
    .launch({
      port: thisRoboChrome.config.port,
      address: address
    })
    .then(function(debugTab){

      thisRoboChrome.websocket = debugTab.webSocketDebuggerUrl;

      return chromeCommunication
      .openSocket(thisRoboChrome, thisRoboChrome.websocket);
    });
  };

  return thisRoboChrome;
};


process
.on('exit', function() {
  chromeCommunication.exit();
});


module.exports = roboChrome;
