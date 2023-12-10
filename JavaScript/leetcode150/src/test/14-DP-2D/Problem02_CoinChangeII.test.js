const change = require('../../main/14-DP-2D/Problem02_CoinChangeII');

test('should return number of combinations', () => {
  const amount = 5,
    coins = [1, 2, 5];

  expect(change(amount, coins)).toBe(4);
});
