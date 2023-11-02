/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0,
    right = 0;
  let n = s1.length;
  let map = new Map();
  let matches = 0;
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }
  while (right < s2.length) {
    map.set(s2[right], (map.get(s2[right]) || 0) - 1);
    //because if its negative then the key's value was not set in s1
    if (map.get(s2[right]) >= 0) {
      //matches maintain the count of same chars we found in s2
      matches++;
    }
    //if the windows size exceeds s1 length then slide
    if (right - left + 1 > n) {
      map.set(s2[left], (map.get(s2[left]) || 0) + 1);
      if (map.get(s2[left]) > 0) {
        matches--;
      }
      left++;
    }
    if (matches === n) {
      return true;
    }
    right++;
  }
  return false;
};

module.exports = checkInclusion;
