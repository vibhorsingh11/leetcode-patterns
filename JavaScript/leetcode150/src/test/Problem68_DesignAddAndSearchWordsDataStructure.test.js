const WordDictionary = require('../main/Problem68_DesignAddAndSearchWordsDataStructure');

test('should return word dictionary', () => {
  let wordDictionary = new WordDictionary();
  wordDictionary.addWord('bad');
  wordDictionary.addWord('dad');
  wordDictionary.addWord('mad');
  expect(wordDictionary.search('pad')).toBeFalsy();
});
