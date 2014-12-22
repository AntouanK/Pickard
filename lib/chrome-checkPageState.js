
'use strict';

module.exports = function(thisPickard){

  if(thisPickard === undefined){
    throw new Error('Pickard instance not given!');
  }

  var pageLoadDeferredReference = thisPickard.pageLoadDeferred;

  //  check if load event has fired
  thisPickard.evaluate('document.readyState;')
  .then(function(readyState){

    if(readyState === "complete"){
      thisPickard.showDebug && log.info('readyState is complete! Resolving load promise');
      pageLoadDeferredReference.resolve();
    }
  });

};
