const minEatingSpeed = require("../main/Problem56_KokoEatingBananas");

test("should return minimum eating speed", () => {
  const piles = [3, 6, 7, 11],
    h = 8;

  expect(minEatingSpeed(piles, h)).toBe(4);
});
