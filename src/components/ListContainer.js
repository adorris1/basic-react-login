var React = require('react');

var AddItem = require('./AddItem');
var List = require('./List');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');

var ListContainer = React.createClass({
  // initializing list by fetching from store
  getInitialState: function() {
    return {
      list: todoStore.getList()
    }
  },
  // event listeners
  componentDidMount: function() {
    todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    todoStore.removeChangeListener(this._onChange);
  },
  // adding to/removing from store
  handleAddItem: function(item) {
    todoActions.addItem(item);
  },
  handleRemoveItem: function(index) {
    todoActions.removeItem(index);
  },
  // re-fetch from store whenever there's a state change
  _onChange: function(){
    this.setState({
      list: todoStore.getList();
    })
  },

  // pass component's state and store down to children
  render: function() {
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;