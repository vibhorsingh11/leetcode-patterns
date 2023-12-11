const findTargetSumWays = require('../../main/14-DP-2D/Problem03_TargetSum');

test('should return number of ways', () => {
  const nums = [1, 1, 1, 1, 1],
    target = 3;

  expect(findTargetSumWays(nums, target)).toBe(5);
});
