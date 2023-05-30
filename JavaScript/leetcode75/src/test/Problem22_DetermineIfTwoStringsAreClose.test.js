const closeStrings = require("../main/Problem22_DetermineIfTwoStringsAreClose");

test("should return whether it is possible or not", () => {
  const word1 = "cabbba",
    word2 = "abbccc";
  expect(closeStrings(word1, word2)).toBe(true);
});
