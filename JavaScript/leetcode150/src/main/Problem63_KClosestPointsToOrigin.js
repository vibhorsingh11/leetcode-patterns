const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let res = [];
  let queue = new MinPriorityQueue();
  for (let point of points) {
    let distance = point[0] * point[0] + point[1] * point[1];
    queue.enqueue(point, distance);
  }

  for (let i = 0; i < k; i++) {
    res.push(queue.dequeue());
  }
  return res;
};

module.exports = kClosest;
