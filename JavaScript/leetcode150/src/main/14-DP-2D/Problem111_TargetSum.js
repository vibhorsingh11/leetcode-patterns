/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  //TC:-O(N x T)
  //SC:-O(N x T)
  const n = nums.length;
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  if (sum - target < 0 || (sum - target) % 2) return 0;
  const k = (sum - target) / 2;

  const dp = new Array(n).fill(null).map(() => new Array(k + 1).fill(0));

  //two cases sum is 0 and nums is also 0
  if (nums[0] === 0) dp[0][0] = 2;
  // once case not pick
  else dp[0][0] = 1;

  if (nums[0] !== 0 && nums[0] <= k) dp[0][nums[0]] = 1;

  for (let i = 1; i < n; i++) {
    for (let target = 0; target <= k; target++) {
      let notTake = dp[i - 1][target];
      let take = 0;
      if (target >= nums[i]) take = dp[i - 1][target - nums[i]];
      dp[i][target] = take + notTake;
    }
  }

  return dp[n - 1][k];
};

//Recursion Solution
//TC:-O(N x T)
//SC:-O(N x T) + O(N)
function helper(i, target, nums) {
  if (i === 0) {
    if (target === 0 && nums[0] === 0) return 2;
    if (target === 0 || target === nums[0]) return 1;
    return 0;
  }

  let notTake = helper(i - 1, target, nums);
  let take = 0;
  if (target >= nums[i]) take = helper(i - 1, target - nums[i], nums);
  return take + notTake;
}

module.exports = findTargetSumWays;
