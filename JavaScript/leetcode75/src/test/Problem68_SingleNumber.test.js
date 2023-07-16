const singleNumber = require("../main/Problem68_SingleNumber");

test("should return single number", () => {
  const nums = [4, 1, 2, 1, 2];
  expect(singleNumber(nums)).toBe(4);
});
