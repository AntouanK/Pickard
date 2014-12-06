
'use strict';

var Pickard = require('./index'),
    pickardA,
    pickardB;


pickardA = new Pickard();

// pickardA.showDebug = true;

pickardA
.openPage('https://betfair.com/exchange')
.then(function(){

  pickardA
  .evaluate('document.title;')
  .then(function(res){
    console.log('title response:', res);
  });

  pickardA
  .evaluate('document.readyState;')
  .then(function(res){
    console.log('document.readyState:', res);
  });

  pickardA
  .onPageLoad
  .then(function(){

    pickardA
    .evaluate('performance.timing;')
    .then(function(res){
      console.log('performance.timing:', res);
      pickardA.exit();
    });
  });

  // pickardA
  // .evaluate("setTimeout(function(){ $('a').filter(function(i, ele){ return $(ele).text() === 'Sign in'; }).click(); }, 4000); ")
  // .then(function(res){
  //   console.log('res', res);
  //
  //   // pickardA.exit();
  // });

});
