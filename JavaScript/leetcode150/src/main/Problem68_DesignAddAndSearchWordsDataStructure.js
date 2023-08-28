class TrieNode {
  constructor() {
    this.childern = new Map();
    this.isEnd = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let c of word) {
    if (!curr.childern.has(c)) {
      curr.childern.set(c, new TrieNode());
    }
    curr = curr.childern.get(c);
  }
  curr.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(node, index) {
    if (index === word.length) {
      return node.isEnd;
    }
    let c = word.charAt(index);

    if (c === '.') {
      for (let child of node.childern.values()) {
        if (dfs(child, index + 1)) {
          return true;
        }
      }
    } else {
      if (!node.childern.has(c)) {
        return false;
      }
      return dfs(node.childern.get(c), index + 1);
    }
    return false;
  }
  return dfs(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

module.exports = WordDictionary;
