/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(26).fill(0);
  let a = "a".charCodeAt(0);

  for (let i = 0; i < word1.length; i++) {
    ++arr1[word1.charCodeAt(i) - a];
    ++arr2[word2.charCodeAt(i) - a];
  }

  for (let i = 0; i < 26; i++) {
    if (Boolean(arr1[i]) ^ Boolean(arr2[i])) return false;
  }

  return arr1.sort().join("") === arr2.sort().join("");
};

module.exports = closeStrings;
