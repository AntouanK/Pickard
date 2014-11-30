
'use strict';

var RoboChrome = require('./index'),
    roboOne;


roboOne = new RoboChrome();


roboOne
.openPage('www.github.com')
.then(function(){

  setTimeout(function(){
    roboOne
    .evaluate('document.title;')
    .then(function(res){
      console.log(res);
    });

    roboOne
    .evaluate('document.body  ;')
    .then(function(res){
      console.log(res);
    });
  },1000);

});
