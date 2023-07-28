/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    let arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      arr[str.charCodeAt(i) - 97]++;
    }
    let key = arr.toString();
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
};

module.exports = groupAnagrams;
