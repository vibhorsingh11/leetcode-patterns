/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0,
    right = 0;
  let size = 0;
  let map = new Map();
  let minSub = '';

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1);
  }
  size = map.size;
  while (right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
      if (map.get(s[right]) === 0) {
        size--;
      }
    }
    // if all the s1 elements are there in current window
    while (size === 0) {
      let subString = s.slice(left, right + 1);
      if (minSub === '' || subString.length < minSub.length) {
        minSub = subString;
      }
      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
        if (map.get(s[left]) > 0) {
          size++;
        }
      }
      left++;
    }
    right++;
  }
  return minSub;
};

module.exports = minWindow;
