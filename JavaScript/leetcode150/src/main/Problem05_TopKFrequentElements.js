/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  //map{1:3,2:2,3:1}

  let arr = new Array(nums.length + 1).fill(null).map(() => []);
  //arr = [[],[],[],[],[],[]]
  for (let [key, value] of map) {
    arr[value].push(key);
  }
  //arr=> [[],[3],[2],[1]]
  let res = [];
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i].length > 0) {
      res.push(...arr[i]);
    }
  }
  return res;
};

module.exports = topKFrequent;
