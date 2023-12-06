/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
  const n = nums.length;
  //arr1 will not contain first element
  //arr2 will not contain last element
  const arr1 = [],
    arr2 = [];
  if (n === 1) return nums[0];

  for (let i = 0; i < n; i++) {
    if (i !== 0) arr1.push(nums[i]);
    if (i !== n - 1) arr2.push(nums[i]);
  }
  //taking min from both array
  return Math.max(helper(arr1), helper(arr2));
};

//space optimized helper function
var helper = function (nums) {
  let prev = nums[0],
    prev2 = 0;

  //take or not take options
  for (let i = 1; i < nums.length; i++) {
    let pick = nums[i];
    //check for -ve index
    if (i > 1) {
      pick = nums[i] + prev2;
    }
    let notPick = prev;
    let curr = Math.max(pick, notPick);
    prev2 = prev;
    prev = curr;
  }
  return prev;
};

module.exports = rob2;
