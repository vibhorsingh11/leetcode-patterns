const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let queue = new MaxPriorityQueue();
  for (let stone of stones) {
    queue.enqueue(stone);
  }

  while (queue.size() > 1) {
    let x = queue.dequeue();
    let y = queue.dequeue();
    let res = Math.abs(x - y);
    if (res !== 0) queue.enqueue(res);
  }
  console.log(queue.front());
  return queue.size() === 0 ? 0 : queue.front();
};

module.exports = lastStoneWeight;
