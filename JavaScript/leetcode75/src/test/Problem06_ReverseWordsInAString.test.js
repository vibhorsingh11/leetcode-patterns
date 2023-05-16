const reverseWords = require('../main/Problem06_ReverseWordsInAString');

test('should revers words', () => {
    const string = 'the sky is blue';
    expect(reverseWords(string)).toBe('blue is sky the');
})