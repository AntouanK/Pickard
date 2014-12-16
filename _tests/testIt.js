
'use strict';

var Pickard = require('./../index'),
    log = require('consologger'),
    pickardA,
    pickardB,
    Utils = require('./../lib/utils');



pickardA = new Pickard();

// pickardA.showDebug = true;

pickardA
.openPage('github.com')
.then(function(){

  pickardA
  .onPageLoad
  .then(function(){
    log.verbose('\n[ evaluating ]\n','document.title;');

    var returnTitle = function(){

      return document.title;
    };

    var getTitle = pickardA.evaluateFn(returnTitle);

    getTitle
    .then(function(title){
      log.info('---> page title is', title);
    });

    return getTitle;
  })
  .then(Utils.delay(1000, true))
  .then(function(){
    log.verbose('\n[ evaluating ]\n','document.querySelector(\'[name="q"]\').value = "Pickard";');
    return pickardA.evaluate('document.querySelector(\'[name="q"]\').value = "Pickard";');
  })
  .then(Utils.delay(1000, true))
  .then(function(){

    log.verbose('\n[ evaluating ]\n','$(\'form\').get(0).submit();');
    return pickardA.evaluate('$(\'form\').get(0).submit();');
  })
  .then(Utils.delay(1000, true))
  .then(function(){

    log.verbose('\n[ evaluating ]\n','$(\'ul.repo-list .repo-list-item .repo-list-name a:eq(0)\').text();');
    return pickardA.evaluate('$(\'ul.repo-list .repo-list-item .repo-list-name a:eq(0)\').text();');
  })
  .then(Utils.delay(1000, true))
  .then(function(firstResult){
    console.log('firstResult is', firstResult);

    log.verbose('\n[ evaluating ]','$(document.querySelector(\'ul.repo-list .repo-list-item .repo-list-name a\')).click()');
    return pickardA.evaluate('$(document.querySelector(\'ul.repo-list .repo-list-item .repo-list-name a\')).click()');
  })
  .then(Utils.delay(1500, true))
  .then(function(){

    log.warning(' we are closing Chrome now...');
    pickardA.exit();
  });


  // pickardA
  // .evaluate('document.title;')
  // .then(function(res){
  //   console.log('title response:', res);
  // });
  //
  // pickardA
  // .evaluate('document.readyState;')
  // .then(function(res){
  //   console.log('document.readyState:', res);
  // });
  //
  // pickardA
  // .onPageLoad
  // .then(function(){
  //
  //   pickardA
  //   .evaluate('performance.timing;')
  //   .then(function(res){
  //     console.log('performance.timing:', res);
  //     pickardA.exit();
  //   });
  // });
  //
  // // pickardA
  // // .evaluate("setTimeout(function(){ $('a').filter(function(i, ele){ return $(ele).text() === 'Sign in'; }).click(); }, 4000); ")
  // // .then(function(res){
  // //   console.log('res', res);
  // //
  // //   // pickardA.exit();
  // // });


});
