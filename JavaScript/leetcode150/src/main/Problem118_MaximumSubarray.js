/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0,
    maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum);

    sum = Math.max(sum, 0);
  }
  return maxSum;
};

module.exports = maxSubArray;
