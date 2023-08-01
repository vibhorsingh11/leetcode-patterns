const threeSum = require('../main/Problem12_3Sum');

test('should return triplets', () => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const res = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  expect(threeSum(nums)).toStrictEqual(res);
});
