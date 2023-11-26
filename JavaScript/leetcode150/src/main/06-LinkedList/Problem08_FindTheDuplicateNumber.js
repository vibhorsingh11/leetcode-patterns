/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  //initialize 2 pointer with first value of nums
  let slow = nums[0];
  let fast = nums[0];
  // treating the array as a linked list and moving 
  //node to node on the basis of array value and index
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

module.exports = findDuplicate;
