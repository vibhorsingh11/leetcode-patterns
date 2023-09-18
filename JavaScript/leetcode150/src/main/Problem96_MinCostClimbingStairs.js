/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n);
  //minimum cost to reach the 0th step is the cost of the 0th step, and the minimum cost
  //to reach the 1st step is the cost of the 1st step.
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};

module.exports = minCostClimbingStairs;
