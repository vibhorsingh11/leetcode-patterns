const characterReplacement = require('../../main/03-SlidingWindow/Problem03_LongestRepeatingCharacterReplacement');

test('should return the longest non repeating char', () => {
  const s = 'AABABBA',
    k = 1;

  expect(characterReplacement(s, k)).toBe(4);
});
