const equalPairs = require("../main/Problem23_EqualRowAndColumnPairs");

test("should return equla rows and column count", () => {
  const grid = [
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ];
  expect(equalPairs(grid)).toBe(1);
});
