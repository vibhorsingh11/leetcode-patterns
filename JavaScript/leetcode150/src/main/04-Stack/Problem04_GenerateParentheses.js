/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const helper = (open, close, str) => {
    //max str length with combinations
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (open < n) helper(open + 1, close, str + '(');
    if (close < open) helper(open, close + 1, str + ')');
  };
  helper(0, 0, '');

  return res;
};

module.exports = generateParenthesis;
