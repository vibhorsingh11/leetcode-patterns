const pivotIndex = require("../main/Problem19_FindPivotIndex");

test("should return the pivot index", () => {
  const nums = [1, 7, 3, 6, 5, 6];
  expect(pivotIndex(nums)).toBe(3);
});
