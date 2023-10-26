/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let column = new Set();
    let square = new Set();
    for (let j = 0; j < 9; j++) {
      let rowIndex = board[i][j];
      let columnIndex = board[j][i];
      let squareIndex =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowIndex !== '.') {
        if (row.has(rowIndex)) return false;
        row.add(rowIndex);
      }
      if (columnIndex !== '.') {
        if (column.has(columnIndex)) return false;
        column.add(columnIndex);
      }
      if (squareIndex !== '.') {
        if (square.has(squareIndex)) return false;
        square.add(squareIndex);
      }
    }
  }
  return true;
};

module.exports = isValidSudoku;
