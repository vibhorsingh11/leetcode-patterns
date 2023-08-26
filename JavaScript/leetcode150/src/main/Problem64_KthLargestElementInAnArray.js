const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let queue = new MinPriorityQueue();
    for(let num of nums){
        queue.enqueue(num);
        if(queue.size() > k){
            queue.dequeue();
        }
    }
    return queue.front();
};

module.exports = findKthLargest;