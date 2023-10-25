const productExceptSelf = require('.../../main/01-ArrayAndHasMap/Problem06_ProductOfArrayExceptSelf');

test('should return array product', () => {
  const nums = [1, 2, 3, 4],
    res = [24, 12, 8, 6];

  expect(productExceptSelf(nums)).toStrictEqual(res);
});
