/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      let top = stack[stack.length - 1];
      if (top === '(' && s[i] === ')') {
        stack.pop();
      } else if (top === '{' && s[i] === '}') {
        stack.pop();
      } else if (top === '[' && s[i] === ']') {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
