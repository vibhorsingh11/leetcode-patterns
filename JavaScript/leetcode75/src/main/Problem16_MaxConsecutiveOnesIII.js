/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let i = 0,
    j = 0;
  while (i < nums.length) {
    // reducing the max filp count
    if (nums[i] == 0) {
      k--;
    }
    // if flip count is less than 0, then move the pointer one step. Or shift the
    // sliding window
    if (k < 0) {
      // if the first element in the previous window was 0, then increase
      // the flip counter by 1
      if (nums[j] == 0) {
        k++;
      }
      // cannot flip more 0. so, need to move the window further
      j++;
    }
    // keep the array traversing
    i++;
  }
  // return the window size
  return i - j;
};

module.exports = longestOnes;
