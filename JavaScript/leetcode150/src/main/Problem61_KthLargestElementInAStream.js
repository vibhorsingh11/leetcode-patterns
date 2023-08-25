const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.queue = new MinPriorityQueue();
  for (let num of nums) {
    this.queue.enqueue(num);
  }
  this.k = k;
  while (this.queue.size() > this.k) {
    this.queue.dequeue();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.queue.enqueue(val);
  while (this.queue.size() > this.k) {
    this.queue.dequeue();
  }
  return this.queue.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

module.exports = KthLargest;
