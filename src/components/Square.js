import React from 'react';

export default function Square(props) {
  const onSquareClick = () => props.handleSquareClick(props.index);

  return (
    <div className={`Square Square-${props.index}`}
      onClick={onSquareClick}>
      {props.squareVal}
    </div>
  );
}
