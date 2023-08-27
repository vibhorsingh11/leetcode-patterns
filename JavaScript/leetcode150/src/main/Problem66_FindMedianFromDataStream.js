const {
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

var MedianFinder = function () {
  this.minHeap = new MinPriorityQueue();
  this.maxHeap = new MaxPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.minHeap.enqueue(num);
  this.maxHeap.enqueue(this.minHeap.dequeue());
  //balance them
  if (this.minHeap.size() < this.maxHeap.size()) {
    this.minHeap.enqueue(this.maxHeap.dequeue());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() > this.maxHeap.size()) return this.minHeap.front();
  else return (this.minHeap.front() + this.maxHeap.front()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

module.exports = MedianFinder;
