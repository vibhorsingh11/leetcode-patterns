const isAnagram = require('../../main/01-ArrayAndHasMap/Problem02_ValidAnagram');

test('should return true if valid anagram', () => {
  const s = 'anagram',
    t = 'nagaram';

  expect(isAnagram(s, t)).toBeTruthy();
});
