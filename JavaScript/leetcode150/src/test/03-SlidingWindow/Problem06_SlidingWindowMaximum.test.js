const maxSlidingWindow = require('../../main/03-SlidingWindow/Problem06_SlidingWindowMaximum');

test('should return max sliding window', () => {
  const nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3;

  expect(maxSlidingWindow(nums, k)).toStrictEqual([3, 3, 5, 5, 6, 7]);
});
