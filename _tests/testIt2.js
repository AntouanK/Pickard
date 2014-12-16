
'use strict';

var Pickard = require('./../index'),
    log = require('consologger'),
    pickardA,
    pickardB;




pickardA = new Pickard();

pickardA.showDebug = true;

pickardA
.openPage('https://inplay.betway.com/#live-betting/all-live')
.then(function(){


  pickardA
  .onPageLoad
  .then(function(){

    var getTitles = function(){

      var titles = document.querySelectorAll('.inplayNav_eventTitle');

      titles =
      Array.prototype.map
      .call(titles, function(ele){
        return ele.textContent;
      });

      return titles;
    };

    pickardA
    .evaluateFn(getTitles)
    .then(function(res){
      console.log('titles ->', res);
    });
  });

});
