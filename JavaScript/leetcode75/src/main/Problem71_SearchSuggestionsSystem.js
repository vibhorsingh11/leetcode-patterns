class Node {
  isWord = false;
  children = new Array(26);
}

class Trie {
  root = null;
  prefixResult = [];
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (const ch of word) {
      const chCode = ch.charCodeAt(0) - 97;
      if (!curr.children[chCode]) {
        curr.children[chCode] = new Node();
      }
      curr = curr.children[chCode];
    }
    curr.isWord = true;
  }
  getWordStartingWith(prefix) {
    let curr = this.root;
    this.prefixResult = [];
    for (let ch of prefix) {
      const chCode = ch.charCodeAt(0) - 97;
      if (!curr.children[chCode]) return this.prefixResult;
      curr = curr.children[chCode];
    }
    this.dfsWithPrefix(curr, prefix);
    return this.prefixResult;
  }
  dfsWithPrefix(curr, prefix) {
    if (this.prefixResult.length >= 3) return this.prefixResult;
    if (curr.isWord) {
      this.prefixResult.push(prefix);
    }
    for (let i = 0; i < 26; i++) {
      if (curr.children[i]) {
        this.dfsWithPrefix(
          curr.children[i],
          prefix + "" + String.fromCharCode(97 + i)
        );
      }
    }
  }
}
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie(),
    result = [];
  for (let product of products) {
    trie.insert(product);
  }

  let prefix = "";
  for (let ch of searchWord) {
    prefix += ch;
    result.push(trie.getWordStartingWith(prefix));
  }
  return result;
};
module.exports = suggestedProducts;
