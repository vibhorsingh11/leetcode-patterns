/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcdLength = gcdOfLength(str1.length, str2.length);
  return str1.slice(0, gcdLength);
};

var gcdOfLength = function (m, n) {
  if (n === 0) return m;
  return gcdOfLength(n, m % n);
};

module.exports = gcdOfStrings;
