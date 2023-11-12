const minEatingSpeed = require('../../main/05-BinarySearch/Problem03_KokoEatingBananas');

test('should return min eating speed', () => {
  const piles = [3, 6, 7, 11],
    h = 8;

  expect(minEatingSpeed(piles, h)).toBe(4);
});
