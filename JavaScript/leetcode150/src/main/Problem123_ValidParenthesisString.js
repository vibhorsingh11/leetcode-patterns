/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let lo = 0;
  let hi = 0;

  for (const c of s) {
    lo += c === '(' ? 1 : -1;
    hi += c !== ')' ? 1 : -1;
    if (hi < 0) break;
    lo = Math.max(lo, 0);
  }

  return lo === 0;
};

module.exports = checkValidString;
