const combinationSum = require('../main/Problem71_CombinationSum');

test('should return all combinations', () => {
  const candidates = [2, 3, 6, 7],
    target = 7,
    res = [[2, 2, 3], [7]];

  expect(combinationSum(candidates, target)).toStrictEqual(res);
});
