const findDifference = require("../main/Problem20_FindTheDifferenceOfTwoArrays");

test("should return difference", () => {
  const nums1 = [1, 2, 3],
    nums2 = [2, 4, 6];
  const result = [
    [1, 3],
    [4, 6],
  ];
  expect(findDifference(nums1, nums2)).toStrictEqual(result);
});
