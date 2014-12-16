# Pickard
[![npm version](https://badge.fury.io/js/pickard.svg)](http://badge.fury.io/js/pickard)

Pickard is a node.js module, able to start a Chrome window, and provide an API to communicate with Chrome ( dev tools ).

**NOTE**
( work in progress, currently works on Mas OS X and Ubuntu. For windows you need Chrome Canary )

### Sample

```javascript
'use strict';

var Pickard = require('pickard'),
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
```

## API

### new Pickard()
gives us a new Pickard instance

#### pickardInstance.openPage(address)
- address: String
- returns -> Promise

Given an address, `openPage()` will launch Chrome, with that address as an argument, and will make all the initialisations on the pickard instance so you can communicate with the page opened.

Promise will be resolved when the connection with the websocket is ready, and the initializations are done.

#### pickardInstance.evaluate(expression)
- expression: String
- returns -> Promise

Given a string, it will evaluate it on the page runtime, and will resolve a promise when the expression returns a result.
The promise will be resolved with the string that the expression will return.

#### pickardInstance.evaluateFn(fn)
- fn: function

Same as `pickardInstance.evaluate()`, but instead of passing a string, we can pass a function to be evaluated.

**NOTE** The function will be converted to a string in order to be send to the runtime of the page, so closures will not work.
Try to make your function print a string so that you can take a useful result back.


#### pickardInstance.exit()
kills the Chrome window that this pickard instance opened.

#### pickardInstance.showDebug
a boolean flag that enables/disables debug logging
( `false` by default )
