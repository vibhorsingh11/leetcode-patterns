const eraseOverlapIntervals = require('../main/Problem127_NonOverlappingIntervals');

test('should return', () => {
  const intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ];

  expect(eraseOverlapIntervals(intervals)).toBe(1);
});
