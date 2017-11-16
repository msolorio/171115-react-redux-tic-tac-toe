import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        <Board />
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  stateProp: state.stateProp
});

export default connect(mapStateToProp)(App);
