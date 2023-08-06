const minWindow = require('../main/Problem19_MinimumWindowSubstring');

test('should return min subString', () => {
  const s = 'ADOBECODEBANC',
    t = 'ABC';

  expect(minWindow(s, t)).toBe('BANC');
});
