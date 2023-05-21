/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let end = height.length - 1;
  let start = 0;
  let maxArea = Number.MIN_VALUE;
  while (start < end) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[start], height[end]) * (end - start)
    );

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxArea;
};

module.exports = maxArea;
