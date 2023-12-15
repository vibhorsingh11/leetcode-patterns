const numDistinct = require('../../main/14-DP-2D/Problem05_DistinctSubsequences');

test('should return Distinct Subsequences', () => {
  const s = 'rabbbit',
    t = 'rabbit';

  expect(numDistinct(s, t)).toBe(3);
});
