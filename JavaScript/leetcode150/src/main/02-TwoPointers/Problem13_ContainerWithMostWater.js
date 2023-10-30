/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let amount = (right - left) * Math.min(height[left], height[right]);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(amount, max);
  }
  return max;
};

module.exports = maxArea;
