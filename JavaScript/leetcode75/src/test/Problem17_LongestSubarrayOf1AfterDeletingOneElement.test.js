const longestSubarray = require("../main/Problem17_LongestSubarrayOf1AfterDeletingOneElement");

test("should return longest sub array", () => {
  const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
  expect(longestSubarray(nums)).toBe(5);
});
