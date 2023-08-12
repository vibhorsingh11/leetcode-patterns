/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    //if mid is equal right element, it means we have a duplicate and just remove it right--
    //if mid element is greater then min will be on right side
    if (nums[mid] === nums[right]) {
      right--;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

module.exports = findMin;
