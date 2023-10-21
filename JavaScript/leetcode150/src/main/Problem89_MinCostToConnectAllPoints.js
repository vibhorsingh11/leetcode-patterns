const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let n = points.length;
  let visited = new Array(n).fill(false);
  let minDis = new Array(n).fill(Infinity);
  minDis[0] = 0;

  let queue = new MaxPriorityQueue();
  queue.enqueue(0);

  let res = 0;

  function distance(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  }

  for (let i = 0; i < n; i++) {
    let curr = -1;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && (curr === -1 || minDis[j] < minDis[curr])) {
        curr = j;
      }
    }
    visited[curr] = true;
    res += minDis[curr];
    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const dist = distance(points[curr], points[j]);
        minDis[j] = Math.min(minDis[j], dist);
      }
    }
  }

  return res;
};

module.exports = minCostConnectPoints;
