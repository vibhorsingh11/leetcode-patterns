var wallsAndGates = function (rooms) {
  let m = rooms.length;
  let n = rooms[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    for (const [x1, y1] of directions) {
      const x = i + x1;
      const y = j + y1;
      if (x < 0 || x >= rooms.length || y < 0 || y >= rooms[0].length || rooms[x][y] <= rooms[i][j] + 1) continue;
      rooms[x][y] = rooms[i][j] + 1;
      queue.push([x, y]);
    }
  }
  return rooms;
};

module.exports = wallsAndGates;
