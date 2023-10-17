const isNStraightHand = require('../main/Problem122_HandOfStraights');

test('should return true', () => {
  const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
    groupSize = 3;

  expect(isNStraightHand(hand, groupSize)).toBeTruthy();
});
