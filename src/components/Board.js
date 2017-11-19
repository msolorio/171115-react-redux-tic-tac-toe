import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { squareClick } from '../actions';

export function Board(props) {

  const handleSquareClick = (index) => props.dispatch(squareClick(index));

  function getSquares() {
    return props.squareVals.map((squareVal, index) => {
      return (
        <Square index={index}
          squareVal={squareVal}
          handleSquareClick={handleSquareClick}
          key={index} />
      );
    });
  }

  return (
    <div className="Board">
      {getSquares()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  squareVals: state.squareVals
});

export default connect(mapStateToProps)(Board);
