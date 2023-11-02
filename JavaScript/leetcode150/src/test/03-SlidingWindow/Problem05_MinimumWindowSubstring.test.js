const minWindow = require('../../main/03-SlidingWindow/Problem05_MinimumWindowSubstring');

test('should return min subString', () => {
  const s = 'ADOBECODEBANC',
    t = 'ABC';

  expect(minWindow(s, t)).toBe('BANC');
});
