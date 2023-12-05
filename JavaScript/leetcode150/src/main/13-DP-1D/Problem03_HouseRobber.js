/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //SPACE OPTIMIZED
  let prev = nums[0],
    prev2 = 0;

  for (let i = 1; i < nums.length; i++) {
    let pick = nums[i];
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

//TC:- O(N)
//SC:- O(1)

module.exports = rob;
