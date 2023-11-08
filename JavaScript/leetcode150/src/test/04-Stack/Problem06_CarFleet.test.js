const carFleet = require('../../main/04-Stack/Problem06_CarFleet');

test('should return total car fleet', () => {
  const target = 12,
    position = [10, 8, 0, 5, 3],
    speed = [2, 4, 1, 1, 3];

  expect(carFleet(target, position, speed)).toBe(3);
});
