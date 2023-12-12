/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // const dp = new Array(m).fill(0).map(() => new Array(n));

  //TABULATION SOLUTION
  // for(let i=0;i<m;i++){
  //     for(let j=0;j<n;j++){
  //         if(i === 0 & j === 0){
  //             dp[i][j] = 1;
  //             continue;
  //         } else {
  //             let up = 0, left = 0;
  //             if(i > 0){
  //                 up = dp[i-1][j];
  //             }
  //             if(j > 0){
  //                 left = dp[i][j - 1];
  //             }
  //             dp[i][j] = up + left;
  //         }
  //     }
  // }
  // return dp[m-1][n-1];

  //SPACE OPTIMIZED SOLUTION
  let prev = new Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    let curr = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        curr[j] = 1;
        continue;
      }
      let up = 0,
        left = 0;
      if (i > 0) {
        up = prev[j];
      }
      if (j > 0) {
        left = curr[j - 1];
      }
      curr[j] = up + left;
    }
    prev = curr;
  }
  return prev[n - 1];
};

module.exports = uniquePaths;
