const maxOperations = require('../main/Problem13_MaxNumberOfKSumPairs');

test('should return maximum number of operations', () => {
    const nums = [1,2,3,4];
    expect(maxOperations(nums, 5)).toBe(2);
})