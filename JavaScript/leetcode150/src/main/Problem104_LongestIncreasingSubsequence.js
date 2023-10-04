/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  //dp of length nums and fill all with 1 as
  //each element forms subsequence with itself
  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      //check previous position for longest increasing subsequence
      if (nums[j] < nums[i]) {
        //element at position j is smaller than i position
        //so, extend the increasing subsequence from j to i
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

module.exports = lengthOfLIS;
