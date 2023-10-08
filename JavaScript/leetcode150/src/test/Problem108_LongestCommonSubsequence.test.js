const longestCommonSubsequence = require('../main/Problem108_LongestCommonSubsequence');

test('should return longest subsequence', () => {
  const text1 = 'abcde',
    text2 = 'ace';

  expect(longestCommonSubsequence(text1, text2)).toBe(3);
});
