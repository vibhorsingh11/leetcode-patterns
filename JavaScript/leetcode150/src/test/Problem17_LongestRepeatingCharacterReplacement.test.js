const characterReplacement = require('../main/Problem17_LongestRepeatingCharacterReplacement');

test('should return the longest non repeating char', () => {
  const s = 'AABABBA',
    k = 1;

  expect(characterReplacement(s, k)).toBe(4);
});
