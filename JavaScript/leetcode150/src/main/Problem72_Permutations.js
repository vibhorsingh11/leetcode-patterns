/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let len = nums.length;
  function helper(nums, currPermut) {
    if (currPermut.length === len) {
      res.push([...currPermut]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      currPermut.push(nums[i]);

      helper([...nums.slice(0, i), ...nums.slice(i + 1)], currPermut);
      currPermut.pop();
    }
  }
  helper(nums, []);
  return res;
};

module.exports = permute;
