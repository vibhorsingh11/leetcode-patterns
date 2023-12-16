const minDistance = require('../../main/14-DP-2D/Problem06_EditDistance');

test('should return minimum number of operations required to convert', () => {
  const word1 = 'horse',
    word2 = 'ros';

  expect(minDistance(word1, word2)).toBe(3);
});
