const isValid = require('../../main/04-Stack/Problem01_ValidParentheses');

test('should return valid', () => {
  const s = '()[]{}';

  expect(isValid(s)).toBeTruthy();
});
