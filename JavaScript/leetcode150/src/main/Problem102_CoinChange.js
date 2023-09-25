/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  //min number of for amount 0. ex, dp[amount] = min number of coins
  dp[0] = 0;

  //
  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      //if amount is not negative, after using current coin
      if (i - coin >= 0) {
        //by adding 1 we say that we can reach the result amount by
        //considering one more coin
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};

module.exports = coinChange;
