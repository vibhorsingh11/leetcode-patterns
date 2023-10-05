/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length;

  let dp = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    for (let word of wordDict) {
      if (i < word.length - 1) {
        continue;
      }

      if (i === word.length - 1 || dp[i - word.length]) {
        if (s.substring(i - word.length + 1, i + 1).includes(word)) {
          dp[i] = true;
          break;
        }
      }
    }
  }
  return dp[n - 1];
};

module.exports = wordBreak;
