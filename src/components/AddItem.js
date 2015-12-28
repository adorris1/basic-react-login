'use strict'

var React = require('react');
var addItemAction = require('../actions/todoActions');

var AddItem = React.createClass({
    contextTypes: {
        getStore: React.PropTypes.func.isRequired,
        executeAction: React.PropTypes.func.isRequired,

    },

    propTypes: {
        setInputItem: React.PropTypes.func.isRequired,
        inputItem: React.PropTypes.string.isRequired,
        inputType: React.PropTypes.string,
        inputId: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    },
    getInitialState: function () {

        var state = this.getStateFromStore();
        return state;
    },
    componentDidMount: function () {
        this.context.getStore('todoStore').addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        this.context.getStore('todoStore').removeChangeListener(this.onChange);
    },
    render: function () {
        var content = this.renderAddItem();
        return (
            <div className="New Item">
                {content}
            </div>
        );
    },
    getStateFromStore: function () {
        var store = this.context.getStore('ContactStore');
        return {
            fields: store.getList()
        };
    },
    setInputElement: function (component) {
        if (component) {
            this.inputElement = component;
        }

    },

    renderAddItem: function () {
        var inputItem = React.createElement(this.props.inputItem, {
            type: this.props.inputType,
            id: this.props.inputId,
            name: this.props.inputId,
            key: this.props.inputId,
            ref: this.props.setInputElement,
            className: 'form-control',
            autoFocus: this.props.focus,
            required: true,
            defaultValue: this.props.fieldValue

        });
        return (
            <div>
                <label htmlFor={this.props.inputId} key={this.props.inputId + '-label'} onsubmit={ this.handleSubmit}>
                    {this.props.label.text}
                </label>
                {inputItem}
            </div>
        );
    },
    onChange: function () {
        var state = this.getStateFromStores();
        state.settled = true;
        this.setState(state);

    },
    handleSubmit: function (event) {
        event.preventDefault();
        var itemValue = this.inputItem.value.trim();

        var fields = this.state.fields;
        fields.addItem(itemValue);
    }

});
//class AddItem extends React.Component {
//  createItem(e){
//    e.preventDefault();
//    let id = guid;
//    let newItem = React.findDOMNode(this.regs.newItem).value.trim();
//    React.findDOMNode(this.refs.newItem).value = '';
//
//  }
//}
//var AddItem = React.createClass({
//  render: function() {
//    var
//  }
//  handleSubmit: function(e){
//    if(e.keyCode === 13){
//      var newItem = this.refs.newItem.getDOMNode().value;
//      this.refs.newItem.getDOMNode().value = '';
//      this.props.add(newItem);
//    }
//  },
//  render: function(){
//    return (
//      <div>
//        <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit}  />
//      </div>
//    )
//  }
//});
//
//module.exports = AddItem;