const uniquePaths = require("../main/Problem63_UniquePaths");

test("should return total unique paths", () => {
  expect(uniquePaths(3, 7)).toBe(28);
});
