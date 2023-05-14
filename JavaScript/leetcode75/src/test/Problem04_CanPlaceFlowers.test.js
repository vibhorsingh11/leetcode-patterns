const canPlaceFlowers = require("../main/Problem04_CanPlaceFlowers");

test("should place flowers", () => {
  const flowerbed = [1, 0, 0, 0, 1];
  expect(canPlaceFlowers(flowerbed, 1)).toBe(true);
});
