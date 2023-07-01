const guessNumber = require("../main/Problem53_GuessNumberHigherOrLower");

test("should return the number", () => {
  expect(guessNumber(10)).toBe(-1);
});
