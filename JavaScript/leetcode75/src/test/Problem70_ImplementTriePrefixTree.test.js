const Trie = require("../main/Problem70_ImplementTriePrefixTree");

test("should work as trie", () => {
  let trie = new Trie();
  trie.insert("apples");
  expect(trie.search("apples")).toBeTruthy();
  expect(trie.startsWith("app")).toBeTruthy();
});
