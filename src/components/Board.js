import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';

export function Board(props) {

  function getSquares() {
    return props.squareVals.map((squareVal, index) => {
      return (
        <Square index={index}
          squareVal={squareVal} />
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
