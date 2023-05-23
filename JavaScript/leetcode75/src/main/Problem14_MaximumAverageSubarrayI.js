/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length < k) return -1;

  let maxA = 0,
    currSum = 0;
  for (let i = 0; i < k; i++) {
    maxA += nums[i];
  }
  currSum = maxA;
  for (let i = k; i < nums.length; i++) {
    currSum += nums[i] - nums[i - k];
    maxA = Math.max(maxA, currSum);
  }
  return maxA / k;
};

module.exports = findMaxAverage;
