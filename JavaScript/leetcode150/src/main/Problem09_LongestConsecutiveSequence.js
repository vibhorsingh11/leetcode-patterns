/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (!set.has(nums)) {
      set.add(num);
    }
  }
  //set=> {100,4,200,1,3,2}
  let maxSeq = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;
      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }
      maxSeq = Math.max(count, maxSeq);
    }
  }
  return maxSeq;
};

module.exports = longestConsecutive;
