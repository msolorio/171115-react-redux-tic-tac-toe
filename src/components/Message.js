import React from 'react';
import { connect } from 'react-redux';
import calculateWinner from '../utilities/calculateWinner';
import calculateSquaresAvailable from '../utilities/calculateSquaresAvailable';

export function Message(props) {
  function calculateMessage() {

    switch(true) {
      case !!calculateWinner(props.squareVals):
        return `Winner: ${calculateWinner(props.squareVals)}`;

      case !calculateSquaresAvailable(props.squareVals):
        return 'Game over. No squares available';

      default:
        return `Player's turn: ${props.xIsNext ? 'X' : 'O'}`;
    }
  }

  return (
    <div className="Message">
      {calculateMessage()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  squareVals: state.squareVals,
  xIsNext: state.xIsNext
});

export default connect(mapStateToProps)(Message);
