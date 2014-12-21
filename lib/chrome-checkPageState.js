
'use strict';

module.exports = function(thisPickard){

  if(thisPickard === undefined){
    throw new Error('Pickard instance not given!');
  }

  //  check if load event has fired
  thisPickard.evaluate('document.readyState;')
  .then(function(readyState){

    if(readyState === "complete"){
      thisPickard.pageLoadDeferred.resolve();
    }
  });

};
