/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  //storing index
  let stack = [];
  let res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    //if current temp is greater than the top element in stack
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};

module.exports = dailyTemperatures;
