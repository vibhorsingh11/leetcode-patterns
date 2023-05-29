/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  let set = new Set(map.values());

  return map.size === set.size;
};

module.exports = uniqueOccurrences;
