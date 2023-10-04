/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Keep track of the maximum and minimum products
    // of subarrays ending at the current index
    const tempMax = Math.max(
      nums[i],
      maxProduct * nums[i],
      minProduct * nums[i]
    );
    const tempMin = Math.min(
      nums[i],
      maxProduct * nums[i],
      minProduct * nums[i]
    );

    // Update the maximum product seen so far
    result = Math.max(result, tempMax);

    maxProduct = tempMax;
    minProduct = tempMin;
  }

  return result;
};

module.exports = maxProduct;
