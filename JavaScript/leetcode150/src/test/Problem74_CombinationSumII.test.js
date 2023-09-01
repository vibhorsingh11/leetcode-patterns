const combinationSum2 = require('../main/Problem74_CombinationSumII');

test('should return combinations', () => {
  const candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8,
    restult = [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ];

  expect(combinationSum2(candidates, target)).toStrictEqual(restult);
});
