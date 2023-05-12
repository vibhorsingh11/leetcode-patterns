/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i =0;
    let j =0;
    let arr = [];
    let m = word1.length;
    let n = word2.length;
    while(i < m || j < n) {
        if(i<m) arr.push(word1[i++]);
        if(j<n) arr.push(word2[j++]);
    }
    return arr.join('');
};

module.exports = mergeAlternately;