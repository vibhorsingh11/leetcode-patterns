/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  // currentJumpEnd represents the farthest index that can be reached with the current number of jumps, 
  //and farthestJumpEnd represents the farthest index that can be reached with the minimum number of jumps
  let currentJumpEnd = 0;
  let farthestJumpEnd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthestJumpEnd = Math.max(farthestJumpEnd, i + nums[i]);
    //reached the farthest index that can be reached with the current number of jumps
    if (i === currentJumpEnd) {
      currentJumpEnd = farthestJumpEnd;
      jumps++;
    }
  }

  return jumps;
};

module.exports = jump;
