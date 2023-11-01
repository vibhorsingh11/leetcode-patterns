/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0,
    right = 0;
  let maxCount = 0,
    maxLen = 0;
  let map = new Map();
  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(s[right]));
    if (right - left + 1 - maxCount > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
};

module.exports = characterReplacement;
