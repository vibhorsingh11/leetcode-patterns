/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  let queue = [];
  queue.push(entrance);

  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let steps = 0;

  let visited = new Array(maze.length)
    .fill(0)
    .map(() => new Array(maze[0].length).fill(false));
  visited[entrance[0]][entrance[1]] = true;

  while (queue.length > 0) {
    let size = queue.length;
    steps++;
    while (size > 0) {
      let coordinates = queue.pop();
      for (let i = 0; i < 4; i++) {
        let dir = directions[i];
        let nextRow = coordinates[0] + dir[0];
        let nextCol = coordinates[1] + dir[1];
        if (
          nextRow >= 0 &&
          nextCol >= 0 &&
          nextRow <= maze.length &&
          nextCol <= maze[0].length &&
          maze[nextRow][nextCol] === "." &&
          !visited[nextRow][nextCol]
        ) {
          if (
            nextRow === 0 ||
            nextCol === 0 ||
            nextRow === maze.length ||
            nextCol === maze[0].length
          ) {
            return steps;
          }
        }
        queue.push([nextRow, nextCol]);
        visited[nextRow][nextCol] = true;
      }
      size--;
    }
  }
  return -1;
};

module.exports = nearestExit;
