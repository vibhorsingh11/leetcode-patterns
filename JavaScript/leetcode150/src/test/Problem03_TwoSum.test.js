const twoSum = require('../main/Problem03_TwoSum');

test('should return the index of two numbers', () => {
  const nums = [2, 7, 11, 15],
    target = 9;
  const result = [0, 1];

  expect(twoSum(nums, target)).toStrictEqual(result);
});
