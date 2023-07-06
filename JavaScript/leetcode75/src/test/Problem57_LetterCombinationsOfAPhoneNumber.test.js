const letterCombinations = require("../main/Problem57_LetterCombinationsOfAPhoneNumber");

test("should return letter Combinations", () => {
  const digits = "23",
    Output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

  expect(letterCombinations(digits)).toStrictEqual(Output);
});
