const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let graph = new Array(n + 1).fill(null).map(() => []);

  for (let [src, tar, we] of times) {
    graph[src].push({ tar, we });
  }

  let dist = new Array(n + 1).fill(Infinity);
  let visited = new Array(n + 1).fill(false);
  let queue = new MinPriorityQueue();
  queue.enqueue(k, 0);

  dist[k] = 0;
  //as graph starting from 1
  dist[0] = 0;

  while (!queue.isEmpty()) {
    let curr = queue.dequeue();

    if (!visited[curr]) {
      visited[curr] = true;

      for (let ng of graph[curr]) {
        const distance = dist[curr] + ng.we;
        //checking if distance is less
        if (distance < dist[ng.tar]) {
          dist[ng.tar] = distance;
          queue.enqueue(ng.tar, distance);
        }
      }
    }
  }

  const impos = dist.includes(Infinity);
  if (impos) return -1;
  return Math.max(...dist);
};

module.exports = networkDelayTime;
