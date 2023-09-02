/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let res = [];
  let combinations = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  function helper(currStr, indx) {
    if (indx === digits.length) {
      res.push(currStr);
      return;
    }
    let letters = combinations[+digits[indx]];
    for (let i = 0; i < letters.length; i++) {
      helper(currStr + letters[i], indx + 1);
    }
  }
  helper('', 0);
  return res;
};

module.exports = letterCombinations;
