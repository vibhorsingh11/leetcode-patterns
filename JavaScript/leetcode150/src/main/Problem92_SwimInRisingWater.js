/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  let left = 0,
    right = n * n - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const visited = new Array(n)
      .fill(false)
      .map(() => new Array(n).fill(false));

    if (canReachDestination(grid, mid, 0, 0, visited)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function canReachDestination(grid, threshold, i, j, visited) {
  const n = grid.length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  if (
    i < 0 ||
    i >= n ||
    j < 0 ||
    j >= n ||
    visited[i][j] ||
    grid[i][j] > threshold
  ) {
    return false;
  }

  visited[i][j] = true;

  if (i === n - 1 && j === n - 1) {
    return true;
  }

  for (const [dx, dy] of directions) {
    if (canReachDestination(grid, threshold, i + dx, j + dy, visited)) {
      return true;
    }
  }

  return false;
}

module.exports = swimInWater;
