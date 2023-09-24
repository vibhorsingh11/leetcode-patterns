/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let n = s.length;
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] !== '0' ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    let singleDigit = parseInt(s.substring(i - 1, i));
    let doubleDigit = parseInt(s.substring(i - 2, i));
    //if single digit is between 1-9, then it can be decoded
    if (singleDigit >= 1) {
      dp[i] += dp[i - 1];
    }
    //if double digit is between 10-26, then it can be decoded
    if (doubleDigit >= 10 && doubleDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};

module.exports = numDecodings;
