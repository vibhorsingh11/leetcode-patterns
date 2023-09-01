/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  function helper(subString, indx) {
    if (indx === s.length) res.push([...subString]);
    for (let i = indx; i < s.length; i++) {
      if (isPalindrome(s.substring(indx, i + 1))) {
        subString.push(s.substring(indx, i + 1));
        helper(subString, i + 1);
        subString.pop();
      }
    }
  }
  helper([], 0);
  return res;
};

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = partition;
