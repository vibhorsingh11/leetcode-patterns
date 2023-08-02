/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxL = 0,
    maxR = 0,
    max = 0;
  while (left < right) {
    if (maxL <= maxR) {
      left++;
      maxL = Math.max(maxL, height[left]);
      max += maxL - height[left];
    } else {
      right--;
      maxR = Math.max(maxR, height[right]);
      max += maxR - height[right];
    }
  }
  return max;
};

module.exports = trap;
