const merge = require('../main/Problem126_MergeIntervals');

test('should return', () => {
  const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    res = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];

  expect(merge(intervals)).toStrictEqual(res);
});
