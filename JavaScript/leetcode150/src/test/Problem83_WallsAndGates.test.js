const wallsAndGates = require('../main/Problem83_WallsAndGates');

test('should return distance', () => {
  const rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ];

  const output = [
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4],
  ];

  expect(wallsAndGates(rooms)).toStrictEqual(output);
});
