const subsets = require('../main/Problem70_Subsets');

test('should return subsets', () => {
  const nums = [1, 2, 3],
    res = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];

  expect(subsets(nums)).toStrictEqual(res);
});
