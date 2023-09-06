/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];
  let fresh = 0;
  let mins = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) {
    return 0;
  }

  while (queue.length > 0) {
    let size = queue.length;
    mins++;
    while (size > 0) {
      let combinations = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
      let [i, j] = queue.shift();
      for (let [x, y] of combinations) {
        let x1 = x + i;
        let y1 = y + j;

        if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n && grid[x1][y1] === 1) {
          grid[x1][y1] = 2;
          queue.push([x1, y1]);
          fresh--;
        }
      }
      size--;
    }
  }
  return fresh === 0 ? mins - 1 : -1;
};

module.exports = orangesRotting;
