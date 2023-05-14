/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      n--;
      flowerbed[i] = 1;
    }
    if (n === 0) {
      return true;
    }
  }
  return n <= 0;
};

module.exports = canPlaceFlowers;
