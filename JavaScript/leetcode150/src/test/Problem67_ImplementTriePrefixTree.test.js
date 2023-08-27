const Trie = require('../main/Problem67_ImplementTriePrefixTree');

test('should implement trie', () => {
  let trie = new Trie();
  trie.insert('apple');
  expect(trie.search('apple')).toBeTruthy();
  expect(trie.search('app')).toBeFalsy();
  expect(trie.startsWith('app')).toBeTruthy();
});
