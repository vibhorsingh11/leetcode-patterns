/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);

  if (sum % 2 !== 0) return false;

  const target = sum / 2;

  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
};

module.exports = canPartition;
