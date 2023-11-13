const findMin = require("../../main/05-BinarySearch/Problem04_FindMinimumInRotatedSortedArray");

test('should return min value', () => {
    const nums = [3,4,5,1,2];

    expect(findMin(nums)).toBe(1);
})