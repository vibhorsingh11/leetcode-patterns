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

//Time Complexity:- O(n) In each iteration of the while loop, the size of the search space is reduced by half. Therefore,
//the number of iterations required to find the minimum element is proportional to the logarithm of the size of the
//input array.

module.exports = findMin;
