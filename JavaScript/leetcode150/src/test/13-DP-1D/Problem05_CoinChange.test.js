const coinChange = require('../../main/13-DP-1D/Problem05_CoinChange');

test('should return fewest number', () => {
  const coins = [1, 2, 5],
    amount = 11;

  expect(coinChange(coins, amount)).toBe(3);
});
