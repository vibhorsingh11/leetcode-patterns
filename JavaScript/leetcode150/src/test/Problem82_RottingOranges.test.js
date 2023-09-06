const orangesRotting = require('../main/Problem82_RottingOranges');

test('should return mins for rotting oranges', () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];

  expect(orangesRotting(grid)).toBe(4);
});
