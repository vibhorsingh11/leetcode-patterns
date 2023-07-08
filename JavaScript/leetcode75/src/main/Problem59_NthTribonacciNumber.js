/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n <= 2) {
    return n == 0 ? 0 : 1;
  }
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

module.exports = tribonacci;
