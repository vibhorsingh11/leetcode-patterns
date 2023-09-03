const numIslands = require('../main/Problem79_NumberOfIslands');

test('should return number of island', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];

  expect(numIslands(grid)).toBe(1);
});
