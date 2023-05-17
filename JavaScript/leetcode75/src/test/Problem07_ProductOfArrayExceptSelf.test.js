const productExceptSelf = require('../main/Problem07_ProductOfArrayExceptSelf');

test('should product Except Self', () => {
    const nums = [1,2,3,4];
    const expected = [24,12,8,6];
    expect(productExceptSelf(nums)).toStrictEqual(expected);
});