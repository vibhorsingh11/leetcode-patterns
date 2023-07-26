const isAnagram = require('../main/Problem02_ValidAnagram');

test('should return true if valid anagram', () => {
  const s = 'anagram',
    t = 'nagaram';

  expect(isAnagram(s, t)).toBeTruthy();
});
