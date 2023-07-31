const twoSum = require("../main/Problem11_TwoSumIIInputArrayIsSorted");

test('should return the indices', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
  expect(twoSum(numbers, target)).toStrictEqual([1, 2]);
});
