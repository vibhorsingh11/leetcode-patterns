/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = new Array(nums.length);
  for (let i = 0, temp = 1; i < nums.length; i++) {
    res[i] = temp;
    temp *= nums[i];
  }

  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }
  return res;
};

module.exports = productExceptSelf;
