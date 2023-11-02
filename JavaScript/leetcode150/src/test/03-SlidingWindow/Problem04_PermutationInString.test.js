const checkInclusion = require('../../main/03-SlidingWindow/Problem04_PermutationInString');

test('should return true', () => {
  const s1 = 'ab',
    s2 = 'eidbaooo';

  expect(checkInclusion(s1, s2)).toBeTruthy();
});
