/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;

  const dfs = (row, col, index) => {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = '#';

    const found =
      dfs(row - 1, col, index + 1) ||
      dfs(row + 1, col, index + 1) ||
      dfs(row, col - 1, index + 1) ||
      dfs(row, col + 1, index + 1);

    board[row][col] = temp;

    return found;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = exist;
