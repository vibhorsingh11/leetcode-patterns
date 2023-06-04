/**
 * @param {string} s
 * @return {string}
 */
let index = 0;
var decodeString = function (s) {
  let result = "";
  let count = "";
  for (let i = index; i < s.length; i++) {
    if (s[i] !== "[" && s[i] !== "]" && isNaN(s[i])) {
      result += s[i];
    } else if (!isNaN(s[i])) {
      count += s[i];
    } else if (s[i] === "[") {
      index = i + 1;
      let nextChar = decodeString(s);
      for (let j = parseInt(count); j > 0; j--) {
        result += nextChar;
      }
      count = "";
      i = index;
    } else if (s[i] === "]") {
      index = i;
      return result;
    }
  }
  return result;
};

module.exports = decodeString;
