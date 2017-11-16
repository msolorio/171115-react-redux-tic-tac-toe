import React, { Component } from 'react';
import Board from './Board';
import Message from './Message';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        <Board />
      </div>
    );
  }
}
