/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  //[-4,-1,-1,0,1,2,4]
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let a = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = a + nums[left] + nums[right];
      if (sum === 0) {
        res.push(new Array(a, nums[left], nums[right]));
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
    console.log(res);
  }
  return res;
};

module.exports = threeSum;
