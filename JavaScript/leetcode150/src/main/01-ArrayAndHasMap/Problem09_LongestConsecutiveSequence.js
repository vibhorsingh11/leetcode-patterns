/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  //set=> {1,2,3,4,100,200}
  let count = 0,
    maxSeq = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      count++;
      //Increase the count if bigger element found
      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }
    }
    maxSeq = Math.max(count, maxSeq);
    count = 0;
  }
  return maxSeq;
};

module.exports = longestConsecutive;
