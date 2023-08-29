/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let resultSubset = [];
  helper(nums, resultSubset, [], 0);
  return resultSubset;
};

function helper(nums, resultSubset, currSubset, index) {
  resultSubset.push([...currSubset]);
  for (let i = index; i < nums.length; i++) {
    currSubset.push(nums[i]);
    helper(nums, resultSubset, currSubset, i + 1);
    currSubset.pop();
  }
}

module.exports = subsets;
