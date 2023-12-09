/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n1 = text1.length;
  const n2 = text2.length;

  // const dp = new Array(n1 + 1).fill(null).map(() => new Array(n2 + 1).fill(0));

  //SPACE OPTIMIZED
  //TC:-O(n1 x n2);
  //SC:-O(n1)
  let prev = new Array(n2 + 1).fill(0);
  let curr = new Array(n2 + 1).fill(0);

  // for (let i = 0; i <= n1; i++) dp[i][0] = 0;
  // for (let j = 0; j <= n2; j++) prev[j] = 0;

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        curr[j] = 1 + prev[j - 1];
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    prev.splice(0, n2 + 1, ...curr);
  }

  return prev[n2];
};

//Memoization solution
//TC:-O(n1 x n2)
//SC:-O(n1 x n2) + O(n1 + n2)
function helper(i, j, text1, text2, dp) {
  if (i < 0 || j < 0) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  if (text1[i] === text2[j]) {
    return (dp[i][j] = 1 + helper(i - 1, j - 1, text1, text2, dp));
  }

  return (dp[i][j] = Math.max(
    helper(i - 1, j, text1, text2, dp),
    helper(i, j - 1, text1, text2, dp)
  ));
}

module.exports = longestCommonSubsequence;
