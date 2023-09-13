const networkDelayTime = require('../main/Problem90_NetworkDelayTime');

test('should return min delay', () => {
  const times = [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    n = 4,
    k = 2;

  expect(networkDelayTime(times, n, k)).toBe(2);
});
