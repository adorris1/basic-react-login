var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var todoStore = require('../stores/todoStore');

module.exports = {
  create
}
function serviceRequest(context, fields, done){
  context.service.create('todoItem', fields, {}, function(){
    context.dispatch('ADD_ITEM', fields);
    return done();
  })
}

module.exports = todoActions;