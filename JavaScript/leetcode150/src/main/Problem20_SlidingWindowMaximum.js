/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let queue = [];

  for (let i = 0; i < nums.length; i++) {
    // remove all values from queue which are smaller than current value of nums
    while (nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }
    // then push the current value in queue
    queue.push(nums[i]);
    //if window size is reached then push the first element from queue
    // add it to result array and remove from queue
    if (i + 1 >= k) {
      res.push(queue[0]);
      // remove first element if window exceeds
      if (nums[i - k + 1] === queue[0]) {
        queue.shift();
      }
    }
  }
  return res;
};

module.exports = maxSlidingWindow;
