/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  //space optimized
  const n = cost.length;
  // const dp = new Array(n + 1).fill(-1);
  // dp[0] = cost[0];
  // dp[1] = cost[1];
  let prev2 = cost[0];
  let prev = cost[1];
  let curr = 0;

  for (let i = 2; i < n; i++) {
    curr = cost[i] + Math.min(prev, prev2);
    prev2 = prev;
    prev = curr;
  }

  return Math.min(prev, prev2);
};

module.exports = minCostClimbingStairs;
