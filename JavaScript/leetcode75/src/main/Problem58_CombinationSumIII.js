/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let outputArr = [];
  helper(outputArr, [], 1, k, n);
  return outputArr;
};

let helper = function (outputArr, temp, start, k, n) {
  if (temp.length === k && n === 0) {
    outputArr.push(new Array(...temp));
    return;
  }
  for (let i = start; i <= 9; i++) {
    temp.push(i);
    helper(outputArr, temp, i + 1, k, n - i);
    temp.pop();
  }
};

module.exports = combinationSum3;
