import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        from App component
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  stateProp: state.stateProp
});

export default connect(mapStateToProp)(App);
