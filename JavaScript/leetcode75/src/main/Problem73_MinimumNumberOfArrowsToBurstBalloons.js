/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    return a[1] - b[1];
  });
  let p = points[0];
  let ans = 1;
  for (let i = 1; i < points.length; i++) {
    if (p[1] >= points[i][0]) {
      p[1] = Math.min(p[1], points[i][1]);
    } else {
      ans++;
      p = points[i];
    }
  }
  return ans;
};

module.exports = findMinArrowShots;
