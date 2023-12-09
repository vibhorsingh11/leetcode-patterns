const longestCommonSubsequence = require('../../main/14-DP-2D/Problem01_LongestCommonSubsequence');

test('should return longest subsequence', () => {
  const text1 = 'abcde',
    text2 = 'ace';

  expect(longestCommonSubsequence(text1, text2)).toBe(3);
});
