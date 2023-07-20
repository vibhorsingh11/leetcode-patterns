const findMinArrowShots = require('../main/Problem73_MinimumNumberOfArrowsToBurstBalloons');

test('should return min arrows', () => {
  const points = [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ];

  expect(findMinArrowShots(points)).toBe(2);
});
