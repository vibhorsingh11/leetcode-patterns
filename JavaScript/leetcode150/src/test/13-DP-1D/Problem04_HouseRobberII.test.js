const rob2 = require('../../main/13-DP-1D/Problem04_HouseRobberII');

test('should return max money', () => {
  const nums = [1, 2, 3, 1];

  expect(rob2(nums)).toBe(4);
});
