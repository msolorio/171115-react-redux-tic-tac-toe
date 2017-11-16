import React from 'react';
import Square from './Square';

export default function Board(props) {
  return (
    <div className="Board">
      <Square />
      <Square />
      <Square />
    </div>
  );
}
