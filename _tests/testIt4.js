'use strict';

var Pickard = require('./../index'),
    johnPickard;

//  make a new Pickard instance
johnPickard = new Pickard();

//  launch a page on Chrome
johnPickard
.openPage('github.com')
.then(function(){

  //	wait for the "load" event to fire
  return johnPickard
  .onPageLoad;
  //   we return that promise so we can chain the next one
})
.then(function(){

  //  let's run `document.title` in the console,
  //  and get the string result back
  return johnPickard
  //  .evaluate takes a string which will be evaluated in the
  //  page runtime ( like writing something in the dev tools console )
  .evaluate('document.title;')
  .then(function(result){
    console.log('document\'s title is:', result);
  });
  //   we return that promise so we can chain the next one
})
.then(function(){

  //  remember, this function will be send as a string and then evaluated
  //  so closures do not work here, work only in the page context
  var getLogoHref = function(){

    var topLogoEle = document.querySelector('.header-logo-wordmark');

    //  remember to make the console print a string
    //  it's the only way to get something useful back
    return topLogoEle.attributes.href.value;
  };

  //  we can use evaluateFn to pass a function
  //  strings as functions are not nice...
  return johnPickard
  .evaluateFn(getLogoHref)
  .then(function(result){
    console.log('href :', result);
  });
  //   we return that promise so we can chain the next one
})
.then(function(){
  //  close the Chrome window
  johnPickard.exit();
});
