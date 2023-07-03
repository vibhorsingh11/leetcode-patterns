/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  let n = spells.length;
  let m = potions.length;
  let pairs = [];
  potions.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = m - 1;
    let spell = spells[i];
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      let product = spell * potions[mid];
      if (product >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    pairs[i] = m - left;
  }
  return pairs;
};

module.exports = successfulPairs;
