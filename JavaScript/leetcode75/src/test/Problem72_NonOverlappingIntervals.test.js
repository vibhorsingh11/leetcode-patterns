const eraseOverlapIntervals = require('../main/Problem72_NonOverlappingIntervals');

test('should return overlaps', () => {
  const intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ];

  expect(eraseOverlapIntervals(intervals)).toBe(1);
});
