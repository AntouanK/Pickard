
var roboChrome,
    chromeCommunication = require('./lib/chrome-communication'),
    portSeed = 9400;



roboChrome = function(){

  this.config = {
    port: portSeed += 1
  };

  this.openPage = function(address){

    chromeCommunication
    .launch({
      port: this.config.port,
      address: address
    });
  };



  return this;
};


process
.on('exit', function() {
  chromeCommunication.exit();
});


module.exports = roboChrome;
