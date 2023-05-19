const compress = require('../main/Problem09_StringCompression');

test('should compress string', () => {
    const chars = ["a","a","b","b","c","c","c"];
    expect(compress(chars)).toBe(6);
})