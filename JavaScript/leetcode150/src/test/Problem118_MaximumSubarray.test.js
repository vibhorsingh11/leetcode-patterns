const maxSubArray = require('../main/Problem118_MaximumSubarray');

test('should return max sub array sum', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

  expect(maxSubArray(nums)).toBe(6);
});
