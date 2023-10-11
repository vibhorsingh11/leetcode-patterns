/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  var sum = nums.reduce((a, b) => a + b);
  if (sum < Math.abs(target) || (sum + target) % 2 !== 0) {
    return 0;
  }
  var sub1 = Math.round((sum + target) / 2);
  var dp = new Array(sub1 + 1).fill(0);
  dp[0] = 1;
  for (var i = 0; i < nums.length; i++) {
    for (var k = sub1; k >= nums[i]; k--) {
      dp[k] += dp[k - nums[i]];
    }
  }
  return dp[sub1];
};

module.exports = findTargetSumWays;
