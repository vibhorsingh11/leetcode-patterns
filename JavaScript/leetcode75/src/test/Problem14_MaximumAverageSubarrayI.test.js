const findMaxAverage = require("../main/Problem14_MaximumAverageSubarrayI");

test("should return max average", () => {
  const nums = [1, 12, -5, -6, 50, 3];
  expect(findMaxAverage(nums, 4)).toBe(12.75);
});
