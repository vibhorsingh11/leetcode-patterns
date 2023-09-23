/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // odd-length palindromes, single character center
    count += expandFromMiddle(s, i, i);
    // even-length palindromes, consecutive characters center
    count += expandFromMiddle(s, i, i + 1);
  }
  return count;
};

function expandFromMiddle(s, left, right) {
  if (s === null || left > right) return 0;
  let count = 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }
  return count;
}

module.exports = countSubstrings;
