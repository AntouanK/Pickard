
'use strict';

var log                 = require('consologger');

module.exports = function(pickardInstance){

  if(
    pickardInstance === undefined ||
    pickardInstance.contextReady === undefined ||
    pickardInstance.pageLoadDeferred === undefined
  ){
    throw new Error('pickardInstance is not ready');
  }

  var thisPickard       = pickardInstance,
      contextReady      = pickardInstance.contextReady,
      pageLoadDeferred  = pickardInstance.pageLoadDeferred,
      contextExists,
      loadEventFired; 
      //  NOTE : pageLoadDeferred can also be fired manually by the checkPageState file

  var parserFn = function(message){

    if(
      thisPickard.showDebug //&&
      // message.method !== undefined &&
      // message.method.match(/Network|CSS/ig) === null
    ){
        log.data('=====[debug]=====', message.method);
      }

      switch(message.method){

        case 'Runtime.executionContextCreated':
          thisPickard.showDebug &&
          log.warning(
            'Runtime.executionContextCreated',
            'message.params.context',
            JSON.stringify(message.params.context)
          );
          !contextExists && (thisPickard.contextId = message.params.context.id);
          log.data('thisPickard.contextId', thisPickard.contextId);

          !contextExists && contextReady.resolve();
          contextExists = true;
          break;

        case 'Runtime.executionContextDestroyed':
          thisPickard.showDebug && log.warning('executionContextDestroyed!');
          break;

        case 'Runtime.executionContextsCleared':
          thisPickard.showDebug && log.warning('--> Runtime.executionContextsCleared');
          contextReady = Promise.defer();
          contextExists = false;
          break;

        case 'Page.loadEventFired':
          thisPickard.showDebug && log.warning('loadEventFired');
          pageLoadDeferred.resolve();
          loadEventFired = true;
          break;

        case 'Page.frameNavigated':
          thisPickard.showDebug && log.warning('Page.frameNavigated');
          break;

        case 'Page.frameScheduledNavigation':
          thisPickard.showDebug && log.warning(message);
          break;

        case 'Page.Page.frameStartedLoading':
          thisPickard.showDebug && log.warning(message);
          break;

        default:
          break;
      }
  };

  return parserFn.bind(pickardInstance);
};
