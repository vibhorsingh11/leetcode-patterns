/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
  if (nums.length < 2) {
    return nums[0] || 0;
  }

  function helper(nums) {
    if (nums.length < 2) {
      return nums[0] || 0;
    }

    if (nums.length === 2) {
      return Math.max(nums[0], nums[1]);
    }

    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      dp[2] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length - 1];
  }

  //Now, we have 2 condition either leave first house or last house
  let firstSkipped = helper(nums.slice(1));
  let lastSkipped = helper(nums.slice(0, nums.length - 1));

  return Math.max(firstSkipped, lastSkipped);
};

module.exports = rob2;
