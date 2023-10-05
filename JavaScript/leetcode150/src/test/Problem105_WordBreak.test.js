const wordBreak = require('../main/Problem105_WordBreak');

test('should return if word is possible', () => {
  const s = 'leetcode',
    wordDict = ['leet', 'code'];

  expect(wordBreak(s, wordDict)).toBeTruthy();
});
