/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] !== '+' &&
      tokens[i] !== '-' &&
      tokens[i] !== '*' &&
      tokens[i] !== '/'
    ) {
      stack.push(tokens[i]);
    } else {
      let top = parseInt(stack.pop());
      let secTop = parseInt(stack.pop());
      if (tokens[i] === '+') {
        stack.push(secTop + top);
      } else if (tokens[i] === '-') {
        stack.push(secTop - top);
      } else if (tokens[i] === '*') {
        stack.push(secTop * top);
      } else {
        stack.push(secTop / top);
      }
    }
  }
  return parseInt(stack.pop());
};

//Time Complexity:- O(n), where n is the number of elements in the `tokens` array.

module.exports = evalRPN;
