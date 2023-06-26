const orangesRotting = require("../main/Problem48_RottingOranges");

test("should return the total minutes", () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];

  expect(orangesRotting(grid)).toBe(4);
});
