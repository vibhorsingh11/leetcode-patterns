const findKthLargest = require("../main/Problem49_KthLargestElementInAnArray");

test("should return kth largest number", () => {
  const nums = [3, 2, 1, 5, 6, 4];
  expect(findKthLargest(nums, 2)).toBe(5);
});
