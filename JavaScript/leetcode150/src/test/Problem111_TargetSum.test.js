const findTargetSumWays = require('../main/Problem111_TargetSum');

test('should return number of ways', () => {
  const nums = [1, 1, 1, 1, 1],
    target = 3;

  expect(findTargetSumWays(nums, target)).toBe(5);
});
