const longestOnes = require('../main/Problem16_MaxConsecutiveOnesIII');

test('should return longest ones', () => {
    let nums = [1,1,1,0,0,0,1,1,1,1,0];
    expect(longestOnes(nums, 2)).toBe(6);
})