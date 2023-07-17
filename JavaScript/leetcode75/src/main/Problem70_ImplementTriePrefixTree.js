var Trie = function() {
    this.n = {};  
    this.isWord = false;
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this;
    for (let i = 0; i < word.length; i++) {
        if (!curr.n[word[i]]) {
            curr.n[word[i]] = new Trie(word[i]);
        }
        curr = curr.n[word[i]];
    }
    curr.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!curr.n[char]) {
            return false;
        }
        curr = curr.n[char];
    }
    return curr.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this;
    for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if (!curr.n[char]) {
            return false;
        }
        curr = curr.n[char];
    }
    return true;
};

module.exports = Trie;

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */