/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let pairs = 0;
  let map = new Map();
  for (let num of nums) {
    if (num < k) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  for (let key of map.keys()) {
    pairs += Math.min(map.get(key) || 0, map.get(k - key) || 0);
  }

  return Math.floor(pairs / 2);
};

module.exports = maxOperations;
