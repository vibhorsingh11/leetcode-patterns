const rob2 = require('../main/Problem98_HouseRobberII');

test('should return max money', () => {
  const nums = [1, 2, 3, 1];

  expect(rob2(nums)).toBe(4);
});
