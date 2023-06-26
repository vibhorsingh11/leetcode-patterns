/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // Sets that will contain the coordinates of fresh and rotten oranges
  let fresh = new Set();
  let rotten = new Set();
  // Loop through all the sets to store the coordinates of fresh
  // and rotten oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        fresh.add("" + i + j);
      } else if (grid[i][j] == 2) {
        rotten.add("" + i + j);
      }
    }
  }
  // Number of minutes taken to become all the oranges rotten
  let minutes = 0;
  // Four directions
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  // Loop until we have fresh oranges
  while (fresh.size > 0) {
    // This set will contain the infected oranges in this iteration
    let infected = new Set();
    for (let s of rotten) {
      // Get x and y coordinates
      let x = s.charAt(0) - "0";
      let y = s.charAt(1) - "0";
      // Check for every direction
      for (let direction of directions) {
        let nextX = x + direction[0];
        let nextY = y + direction[1];
        if (fresh.has("" + nextX + nextY)) {
          fresh.delete("" + nextX + nextY);
          infected.add("" + nextX + nextY);
        }
      }
    }
    // If we have not infected any orange then we can terminate the loop
    if (infected.size == 0) {
      return -1;
    }
    // Else we will update the state of rotten oranges
    rotten = infected;
    minutes++;
  }
  return minutes;
};

module.exports = orangesRotting;
