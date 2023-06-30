const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let firstHalf = new MinPriorityQueue();
  let lastHalf = new MinPriorityQueue();

  for (let i = 0; i < candidates; i++) {
    firstHalf.enqueue(costs[i]);
  }
  let index = Math.max(candidates, costs.length - candidates);
  for (let i = index; i < costs.length; i++) {
    lastHalf.enqueue(costs[i]);
  }

  let nextFirst = candidates;
  let nextLast = costs.length - candidates - 1;
  let result = 0;
  for (let i = 0; i < k; i++) {
    if (
      lastHalf.isEmpty() ||
      (!firstHalf.isEmpty() && firstHalf.front() <= lastHalf.front())
    ) {
      result += firstHalf.dequeue();
      if (nextFirst <= nextLast) {
        firstHalf.enqueue(costs[nextFirst]);
        nextFirst++;
      }
    } else {
      result += lastHalf.dequeue();
      if (nextFirst <= nextLast) {
        lastHalf.enqueue(costs[nextLast]);
        nextLast--;
      }
    }
  }
  return result;
};

module.exports = totalCost;
