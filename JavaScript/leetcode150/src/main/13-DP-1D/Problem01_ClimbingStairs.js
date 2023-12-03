/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //space optimized
  let prev = 1,
    prev2 = 1;

  for (let i = 2; i <= n; i++) {
    let curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
  return prev;
};

//TC:- O(N)
//SP:- O(1)

module.exports = climbStairs;
