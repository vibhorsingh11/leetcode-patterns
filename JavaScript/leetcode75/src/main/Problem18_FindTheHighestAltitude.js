/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  //Highest altitude can be found by prefix sum
  //and keeping track of max high altitude
  let altSum = 0,
    highestAlt = 0;
  for (let point of gain) {
    altSum += point;
    highestAlt = Math.max(highestAlt, altSum);
  }
  return highestAlt;
};

module.exports = largestAltitude;
