const findMedianSortedArrays = require('../../main/05-BinarySearch/Problem07_MedianOfTwoSortedArrays');

test('should return min median', () => {
  const nums1 = [1, 3],
    nums2 = [2];

  expect(findMedianSortedArrays(nums1, nums2)).toBe(2.0);
});
