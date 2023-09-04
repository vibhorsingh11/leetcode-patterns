/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let m = heights.length;
  let n = heights[0].length;
  let pacific = new Array(m).fill().map(() => new Array(n).fill(0));
  let atlantic = new Array(m).fill().map(() => new Array(n).fill(0));
  let res = [];

  function dfs(i, j, visited) {
    visited[i][j] = true;

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (let [x, y] of directions) {
      let x1 = i + x;
      let y1 = j + y;

      if (
        x1 >= 0 &&
        x1 < m &&
        y1 >= 0 &&
        y1 < n &&
        !visited[x1][y1] &&
        heights[x1][y1] >= heights[i][j]
      ) {
        dfs(x1, y1, visited);
      }
    }
  }
  //left & top
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific);
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific);
  }

  //right & bottom
  for (let i = 0; i < m; i++) {
    dfs(i, n - 1, atlantic);
  }

  for (let j = 0; j < n; j++) {
    dfs(m - 1, j, atlantic);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

module.exports = pacificAtlantic;
