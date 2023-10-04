const maxProduct = require('../main/Problem103_MaximumProductSubarray');

test('should return max subarray', () => {
  const nums = [2, 3, -2, 4];

  expect(maxProduct(nums)).toBe(6);
});
