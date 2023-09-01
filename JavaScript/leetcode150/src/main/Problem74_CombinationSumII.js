/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);

  function helper(currSum, currComb, currIndx) {
    if (currSum > target) return;
    if (currSum === target) {
      res.push([...currComb]);
      return;
    }
    for (let i = currIndx; i < candidates.length; i++) {
      if (i > currIndx && candidates[i] === candidates[i - 1]) continue;
      currComb.push(candidates[i]);
      currSum += candidates[i];
      helper(currSum, currComb, i + 1);
      currComb.pop();
      currSum -= candidates[i];
    }
  }

  helper(0, [], 0);
  return res;
};

module.exports = combinationSum2;
