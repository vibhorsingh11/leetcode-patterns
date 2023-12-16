/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  //using 1 based indexing
  //Any i===0 return j
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 0; i <= m; i++) dp[i][0] = i;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        //3 cases
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};

//Memoization solution
function helper(i, j, s, t, dp) {
  //if word1 ends
  if (i < 0) return j + 1;
  //if word 2 ends
  if (j < 0) return i + 1;

  if (dp[i][j] !== -1) return dp[i][j];

  if (s[i] === t[j]) {
    return (dp[i][j] = helper(i - 1, j - 1, s, t, dp));
  } else {
    //3 cases
    return (dp[i][j] =
      1 +
      Math.min(
        helper(i - 1, j, s, t, dp),
        helper(i, j - 1, s, t, dp),
        helper(i - 1, j - 1, s, t, dp)
      ));
  }
}

module.exports = minDistance;
