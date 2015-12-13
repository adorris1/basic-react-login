var React = require('react');
var ListContainer = require('./components/ListContainer.js');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)

module.exports = App;