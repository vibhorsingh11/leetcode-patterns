/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    return arr.reverse().filter(w => w !== "").join(' ');
};

module.exports = reverseWords;