const nearestExit = require("../main/Problem47_NearestExitFromEntranceInMaze");

test("should return nearest exit path", () => {
  const maze = [
      ["+", "+", ".", "+"],
      [".", ".", ".", "+"],
      ["+", "+", "+", "."],
    ],
    entrance = [1, 2];

  expect(nearestExit(maze, entrance)).toBe(1);
});
