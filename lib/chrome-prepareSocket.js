
'use strict';

module.exports = function(thisPickard){

  var deferred = Promise.defer();

  if(thisPickard === undefined){
    deferred.reject('Pickard instance not given!');
  }

  thisPickard.write({ method: 'Console.enable'});
  thisPickard.write({ method: 'Network.enable'});
  thisPickard.write({ method: 'Page.enable'});
  thisPickard.write({ method: 'Runtime.enable'});
  thisPickard.write({ method: 'DOM.enable'});
  thisPickard.write({ method: 'CSS.enable'});


  //  -------------------------------------------------- thisPickard.disableCache
  thisPickard.disableCache = function(){

    thisPickard
    .write({
      method: 'Network.setCacheDisabled',
      params: { cacheDisabled: true }
    });
  };

  //  -------------------------------------------------- thisPickard.enableCache
  thisPickard.enableCache = function(){

    thisPickard
    .write({
      method: 'Network.setCacheDisabled',
      params: { cacheDisabled: true }
    });
  };

  deferred.resolve(thisPickard);

  return deferred.promise;
};
