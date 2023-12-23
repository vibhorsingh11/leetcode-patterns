const lengthOfLIS = require('../../main/13-DP-1D/Problem07_LongestIncreasingSubsequence');

test('should return Longest Increasing Subsequence count', () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];

  expect(lengthOfLIS(nums)).toBe(4);
});
