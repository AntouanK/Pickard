
'use strict';

var Pickard = require('./../index'),
    log = require('consologger'),
    pickardA,
    pickardB;


pickardA = new Pickard();

pickardA.showDebug = true;

pickardA
.openPage('github.com')
.then(function(){


  var getNextPage,
  i,
  pages;


  pickardA
  .onPageLoad
  .then(function(){

    pickardA
    .evaluate('document.title;')
    .then(function(res){
      console.log('document.title:', res);
    });
  });

  pages = [
  // 'https://www.github.com',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'https://news.ycombinator.com/news',
  'https://www.google.com'
  ];

  i = 0;

  getNextPage = function(){

    if(i >= pages.length){
      i = 0;
    }

    return pages[i++];
  };

  setInterval(function(){

    var url = getNextPage();

    log.info('location.href = \'' + url + '\';');
    pickardA
    .evaluate('location.href = \'' + url + '\';')
    .then(function(res){
      console.log('response:', res);
    });

  }, 5000);

});
