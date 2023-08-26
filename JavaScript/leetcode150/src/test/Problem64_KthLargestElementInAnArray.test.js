const findKthLargest = require('../main/Problem64_KthLargestElementInAnArray');

test('should return k largest', () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
    k = 4;

  expect(findKthLargest(nums, k)).toBe(4);
});
