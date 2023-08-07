const isValid = require('../main/Problem21_ValidParentheses');

test('should return valid', () => {
  const s = '()[]{}';

  expect(isValid(s)).toBeTruthy();
});
