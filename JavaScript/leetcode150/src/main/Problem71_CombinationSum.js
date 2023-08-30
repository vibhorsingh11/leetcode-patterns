/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ans = [];
  function helper(currComb, currSum, currIndex) {
    if (currSum > target) return;
    if (currSum === target) {
      ans.push([...currComb]);
      return;
    }
    for (let i = currIndex; i < candidates.length; i++) {
      currComb.push(candidates[i]);
      currSum += candidates[i];
      helper(currComb, currSum, i);
      currComb.pop();
      currSum -= candidates[i];
    }
  }
  helper([], 0, 0);
  return ans;
};

module.exports = combinationSum;
