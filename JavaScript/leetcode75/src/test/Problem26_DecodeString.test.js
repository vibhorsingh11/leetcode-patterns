const decodeString = require("../main/Problem26_DecodeString");

test("should return decoded string", () => {
  const s = "3[a]2[bc]";
  const result = "aaabcbc";
  expect(decodeString(s)).toMatch(result);
});
