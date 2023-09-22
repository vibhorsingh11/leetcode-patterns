const longestPalindrome = require('../main/Problem99_LongestPalindromicSubstring');

test('should return longest palindrome', () => {
  const s = 'babad';

  expect(longestPalindrome(s)).toBe('aba');
});
