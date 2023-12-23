/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;

  let next = new Array(n + 1).fill(0);
  let cur = new Array(n + 1).fill(0);

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let prev_index = ind - 1; prev_index >= -1; prev_index--) {
      let notTake = 0 + next[prev_index + 1];

      let take = 0;

      if (prev_index == -1 || nums[ind] > nums[prev_index]) {
        take = 1 + next[ind + 1];
      }

      cur[prev_index + 1] = Math.max(notTake, take);
    }
    next = cur;
  }

  return cur[0];
};

//Memoization SOLUTION
function helper(i, previ, nums, dp) {
  if (i === nums.length) return 0;

  if (dp[i][previ + 1] !== -1) return dp[i][previ + 1];

  //not Take
  let len = helper(i + 1, previ, nums, dp);
  //Take
  if (previ === -1 || nums[i] > nums[previ]) {
    len = Math.max(len, 1 + helper(i + 1, i, nums, dp));
  }

  return (dp[i][previ + 1] = len);
}

module.exports = lengthOfLIS;
