/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  function helper(currSub, indx) {
    res.push([...currSub]);
    for (let i = indx; i < nums.length; i++) {
      if (i > indx && nums[i] === nums[i - 1]) continue;
      currSub.push(nums[i]);
      helper(currSub, i + 1);
      currSub.pop();
    }
  }
  helper([], 0);
  return res;
};

module.exports = subsetsWithDup;
