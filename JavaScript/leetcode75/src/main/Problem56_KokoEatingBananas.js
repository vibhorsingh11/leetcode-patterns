/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0;
  let right = 1000000000;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let hour = 0;
    for (let pile of piles) {
      let div = Math.ceil(pile / mid);
      hour += div;
    }
    if (hour <= h) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

module.exports = minEatingSpeed;
