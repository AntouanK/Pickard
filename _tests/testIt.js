'use strict';

var Pickard = require('../index'),
    johnPickard;

//  make a new Pickard instance
johnPickard = new Pickard();


//  launch github.com page on Chrome
johnPickard
.openPage('github.com')
//  wait for the "load" event to fire
.then(function(){

  return johnPickard.getNextPageLoad();
})
.then(function(){

  //  let's run `document.title` in the console,
  //  and get the string result back
  return johnPickard.evaluate('document.title;')
})
.then(function(result){
  console.log('document\'s title is:', result);
})
.then(function(){

  //  we can use evaluateFn to pass a function, it's better than strings.
  //  remember, this function will be send as a string and then evaluated
  //  so closures do not work here, work only in the page context
  return johnPickard.evaluateFn(function(){

    var topLogoEle = document.querySelector('.header-logo-wordmark');

    //  remember to make the console print a string
    //  it's the only way to get something useful back
    return topLogoEle.attributes.href.value;
  });
})
.then(function(result){
  //  do something with the result of our previous function
  //  we assume it returns a string...
  console.log('href :', result);
})
.then(function(){

  return johnPickard.evaluateFn(function(){

    //  fill in the input
    document.querySelector('input[name="q"]').value = "Pickard";

    //  submit the form
    document.querySelector('form[action="/search"]').submit();
  });
})
.then(function(){

  //  wait for the "load" event to fire
  return johnPickard.getNextPageLoad();
})
.then(function(){

  //  let's print the first result
  return johnPickard.evaluateFn(function(){
    return document.querySelector('.repo-list-item.public.source h3 a').textContent;
  });
})
.then(function(textContent){

  console.log('textContent of first item is ', textContent);
})
//  close the Chrome window
.then(johnPickard.exit)
//  errors do happen...
.catch(function(err){
  throw err;
});
