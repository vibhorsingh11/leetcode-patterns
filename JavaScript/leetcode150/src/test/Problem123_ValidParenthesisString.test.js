const checkValidString = require('../main/Problem123_ValidParenthesisString');

test('should return valid string', () => {
  const s = '(*))';

  expect(checkValidString(s)).toBeTruthy();
});
