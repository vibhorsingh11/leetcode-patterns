const lengthOfLongestSubstring = require('../../main/03-SlidingWindow/Problem02_LongestSubstringWithoutRepeatingCharacters');

test('should return length od longest substring', () => {
  const s = 'pwwkew';

  expect(lengthOfLongestSubstring(s)).toBe(3);
});
