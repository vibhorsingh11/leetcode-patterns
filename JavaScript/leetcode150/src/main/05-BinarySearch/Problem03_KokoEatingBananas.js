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

//Time Complexity:- O(n log m) where n is the length of the piles array and m is the maximum value in the piles array.
//This is because the code uses a binary search algorithm to find the minimum eating speed, which has a
//time complexity of O(log m), and for each iteration of the binary search, it calculates the number of hours
//required to eat all the piles, which takes O(n) time.

module.exports = minEatingSpeed;
