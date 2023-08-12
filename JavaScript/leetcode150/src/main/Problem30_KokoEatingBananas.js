/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = Math.max(...piles);
  let minHours = right;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours <= h) {
      minHours = Math.min(minHours, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minHours;
};

module.exports = minEatingSpeed;
