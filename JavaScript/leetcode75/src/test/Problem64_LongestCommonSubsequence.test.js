const longestCommonSubsequence = require("../main/Problem64_LongestCommonSubsequence");

test("should return the longest sequence", () => {
  expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
});
