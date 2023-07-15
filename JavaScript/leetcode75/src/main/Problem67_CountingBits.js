/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (num) {
  let arr = new Array(num + 1).fill(0);
  for (let i = num; num > 0; i--) {
    arr[i] = bits(num);
    num--;
  }
  return arr;
};

let bits = function (n) {
  if (n == 0) return 0;

  return (n & 1) + bits(n >> 1);
};

module.exports = countBits;
