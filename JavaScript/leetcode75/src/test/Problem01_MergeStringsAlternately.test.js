const mergeAlternately = require('../main/Problem01_MergeStringsAlternately');

test('should output', () => {
    const word1 = 'abc', word2 = 'pqr';
    const res = mergeAlternately(word1, word2);
    expect(res).toBe('apbqcr')
})