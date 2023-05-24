/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let set = new Set(["a", "i", "e", "o", "u"]);
  let maxCount = 0,
    count = 0;
  for (let i = 0; i < k; i++) {
    count += set.has(s[i]) ? 1 : 0;
  }
  maxCount = count;
  for (let i = k; i < s.length; i++) {
    count += set.has(s[i]) ? 1 : 0;
    count -= set.has(s[i - k]) ? 1 : 0;
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

module.exports = maxVowels;
