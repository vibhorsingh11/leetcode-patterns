const predictPartyVictory = require("../main/Problem28_Dota2Senate");

test("should return party name", () => {
  let senate = "DDRRR";
  expect(predictPartyVictory(senate)).toBe("Dire");
});
