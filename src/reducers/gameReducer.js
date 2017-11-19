import * as actions from '../actions';
import calculateWinner from '../utilities/calculateWinner';

const initialState = {
  squareVals: Array(9).fill(''),
  xIsNext: true
};

export default function gameReducer(state=initialState, action) {

  // HANDLE SQUARE CLICK
  if (action.type === actions.SQUARE_CLICK) {

    if (calculateWinner(state.squareVals)) return state;

    if (state.squareVals[action.index] !== '') return state;

    const squareValsClone = state.squareVals.slice(0);
    squareValsClone[action.index] = state.xIsNext ? 'X' : 'O';

    return Object.assign({}, state, {
      xIsNext: !state.xIsNext,
      squareVals: squareValsClone
    });
  }

  return state;
}
