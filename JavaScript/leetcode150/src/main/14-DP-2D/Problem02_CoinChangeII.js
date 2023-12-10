/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const n = coins.length;
  // const dp = new Array(n).fill(null).map(() => new Array(amount + 1).fill(0));

  let prev = new Array(amount + 1).fill(0);
  let curr = new Array(amount + 1).fill(0);

  //converting recusion base condition to tabulation
  //if index is 0 then amount can be 0 to amount...
  //else condition no need to handle as array is filled with 0
  for (let t = 0; t <= amount; t++) {
    if (t % coins[0] === 0) prev[t] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let target = 0; target <= amount; target++) {
      let notTake = prev[target];
      let take = 0;
      if (target >= coins[i]) take = curr[target - coins[i]];
      curr[target] = notTake + take;
    }
    prev = curr;
  }

  return prev[amount];
};

function helper(i, target, coins, dp) {
  if (i === 0) {
    if (target % coins[i] === 0) return 1;
    return 0;
  }

  if (dp[i][target] !== 0) return dp[i][target];

  let notTake = helper(i - 1, target, coins, dp);
  let take = 0;
  if (target >= coins[i]) take = helper(i, target - coins[i], coins, dp);
  return (dp[i][target] = notTake + take);
}

module.exports = change;
