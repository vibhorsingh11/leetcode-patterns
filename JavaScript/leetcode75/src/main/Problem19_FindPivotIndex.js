/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0,
      leftSum = 0;
    for (let num of nums) {
      sum += num;
    }
    for (let i = 0; i < nums.length; i++) {
      //Getting right side sum by subtracting from total sum, the current value and left sum
      let rightSum = sum - leftSum - nums[i];
      //If found then return the current index
      if (leftSum == rightSum) {
        return i;
      }
      //calculating the left side sum while traversing
      leftSum += nums[i];
    }
    return -1;
  };
  
  module.exports = pivotIndex;
  