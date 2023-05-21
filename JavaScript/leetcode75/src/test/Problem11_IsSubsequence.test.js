const isSubsequence = require('../main/Problem11_IsSubsequence');

test('should return true', () => {
    const s = "abc", t = "ahbgdc";
    expect(isSubsequence(s,t)).toBe(true);
});