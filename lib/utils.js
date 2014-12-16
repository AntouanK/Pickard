/*
  Pickard module
  @antouank 2014
*/

'use strict';

var Utils = {},
log = require('consologger');


//  add delay to a promise, passing along the arguments
Utils.delay = function(duration, withLog){

  return function(){

    var deferred = Promise.defer(),
        givenArguments = arguments;

    //  if withLog, type a message
    withLog && log.verbose('delay for', duration, 'ms...');

    setTimeout(function(){
      deferred.resolve.apply(null, givenArguments);
    }, duration);

    return deferred.promise;
  };
};


module.exports = Utils;
