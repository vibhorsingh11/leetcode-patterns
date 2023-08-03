const lengthOfLongestSubstring = require('../main/Problem16_LongestSubstringWithoutRepeatingCharacters');

test('should return length od longest substring', () => {
  const s = 'pwwkew';

  expect(lengthOfLongestSubstring(s)).toBe(3);
});
