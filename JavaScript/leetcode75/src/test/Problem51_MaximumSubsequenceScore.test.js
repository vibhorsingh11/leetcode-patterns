const maxScore = require("../main/Problem51_MaximumSubsequenceScore");

test("should return max score", () => {
  const nums1 = [1, 3, 3, 2],
    nums2 = [2, 1, 3, 4],
    k = 3;

  expect(maxScore(nums1, nums2, k)).toBe(12);
});
