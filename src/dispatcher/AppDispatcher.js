import {Dispatcher} from 'flux';
var AppDispatcher = new Dispatcher();

import todoStore from '../stores/todoStore';

AppDispatcher.register((payload) => {

  let action = payload.action;
  let newItem
})
AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;