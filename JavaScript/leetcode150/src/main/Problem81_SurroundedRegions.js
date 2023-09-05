/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0 || board[0].length === 0) {
    return;
  }
  let m = board.length;
  let n = board[0].length;

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') {
      return;
    }
    board[i][j] = '#';
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (let [x, y] of directions) {
      let x1 = i + x;
      let y1 = j + y;
      dfs(x1, y1);
    }
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0); // Leftmost column
    dfs(i, n - 1); // Rightmost column
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j); // Top row
    dfs(m - 1, j); // Bottom row
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }

  return board;
};

module.exports = solve;
