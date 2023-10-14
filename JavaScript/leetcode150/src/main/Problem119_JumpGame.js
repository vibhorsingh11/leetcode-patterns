/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    // if possible to reach or go beyond the current goal position from the current index
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal === 0 ? true : false;
};

module.exports = canJump;
