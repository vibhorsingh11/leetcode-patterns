/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //pwwkew
  let left = 0,
    right = 0,
    maxLength = 0;
  let set = new Set();
  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left++]);
    }
    set.add(s[right++]);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
};

module.exports = lengthOfLongestSubstring;
