/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  console.log(s);
  let index = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[index--]) return false;
  }
  return true;
};

module.exports = isPalindrome;
