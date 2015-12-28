var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var createStore = require('fluxible/addons').createStore;


var todoStore = createStore({
  storeName: 'todoStore',

  handlers: {
    'ADD_ITEM': 'addItem',
    'REMOVE_ITEM': 'removeItem'
  },

    initialize: function(){

    }

})

// temp "database"
var _store = {
  list: []
};

// querying the temp DB
var addItem = function(item){
  _store.list.push(item);
};

var removeItem = function(index){
  _store.list.splice(index, 1);
}

// CLONES & EXTENDS the EventEmitter prototype into something we can use
var todoStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
});

// 
AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      addItem(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      removeItem(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = todoStore;