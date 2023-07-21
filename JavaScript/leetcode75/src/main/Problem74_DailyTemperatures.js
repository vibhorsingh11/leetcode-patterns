/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }
  return res;
};

module.exports = dailyTemperatures;
