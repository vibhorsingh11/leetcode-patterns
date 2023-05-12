const gcdOfStrings = require('../main/Problem02_GreatestCommonDivisorOfStrings');

test('should output GCD strings', () => {
    const str1 = 'ABCABC', str2 = 'ABC';
    expect(gcdOfStrings(str1, str2)).toBe('ABC');
})