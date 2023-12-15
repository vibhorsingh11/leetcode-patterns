/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

//TC:-O(M * N)
//SC:-O(M)
var numDistinct = function (s, t) {
  const m = s.length;
  const n = t.length;

  let prev = new Array(m + 1).fill(0);

  prev[0] = 1;

  //carry on 1 based but compare 0 based index
  for (let i = 1; i <= m; i++) {
    let curr = new Array(n + 1).fill(0);
    curr[0] = 1;
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        curr[j] = prev[j - 1] + prev[j];
      } else {
        curr[j] = prev[j];
      }
    }
    prev = curr;
  }

  return prev[n];
};

//Meoization Solution (TLE)
function helper(i, j, s, t, dp) {
  if (j < 0) return 1;
  if (i < 0) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  if (s[i] === t[j]) {
    return helper(i - 1, j - 1, s, t, dp) + helper(i - 1, j, s, t, dp);
  }
  return (dp[i][j] = helper(i - 1, j, s, t, dp));
}

module.exports = numDistinct;
