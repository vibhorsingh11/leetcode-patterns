/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const n = nums.length;
  const target = nums.reduce((acc, curr) => acc + curr, 0);

  if (target % 2 !== 0) return false;
  const k = target / 2;

  let prev = new Array(k + 1).fill(false);
  prev[0] = true;
  if (nums[0] <= k) {
    prev[nums[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    let curr = new Array(k + 1).fill(false);
    curr[0] = true;
    //target traverse loop
    for (let target = 1; target <= k; target++) {
      let notTake = prev[target];
      let take = false;
      if (target >= nums[i]) {
        take = prev[target - nums[i]];
      }
      curr[target] = take || notTake;
    }
    prev = curr;
  }
  return prev[k];
};

//Memorization solution
function helper(i, target, nums, dp) {
  if (target === 0) return true;
  if (i === 0) return nums[0] === target;

  if (dp[i][target] !== -1) return dp[i][target];

  let notTake = helper(i - 1, target, nums, dp);
  let take = false;
  if (target >= nums[i]) {
    take = helper(i - 1, target - nums[i], nums, dp);
  }
  dp[i][target] = take || notTake;
  return take || notTake;
}

module.exports = canPartition;
