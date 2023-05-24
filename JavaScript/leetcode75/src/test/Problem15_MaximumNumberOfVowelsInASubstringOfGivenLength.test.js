const maxVowels = require("../main/Problem15_MaximumNumberOfVowelsInASubstringOfGivenLength");

test("should return max vowels", () => {
  const s = "abciiidef";
  expect(maxVowels(s, 3)).toBe(3);
});
