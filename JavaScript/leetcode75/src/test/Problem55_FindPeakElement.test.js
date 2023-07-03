const findPeakElement = require("../main/Problem55_FindPeakElement");

test("should return peak element", () => {
  const nums = [1, 2, 3, 1];

  expect(findPeakElement(nums)).toBe(2);
});
