/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  function helper(left, right, currString) {
    if (left === 0 && right === 0) {
      res.push(currString);
    }

    if (left > 0) {
      helper(left - 1, right, currString + '(');
    }
    if (right > left) {
      helper(left, right - 1, currString + ')');
    }
  }
  helper(n, n, '');

  return res;
};

module.exports = generateParenthesis;
