// returns a boolean signifying if squares are available
export default function calculateSquaresAvailable(squareVals) {
  return squareVals.reduce((squaresAvailable, squareVal) => {
    if (squareVal === '') return true;
    return squaresAvailable;
  }, false);
};
