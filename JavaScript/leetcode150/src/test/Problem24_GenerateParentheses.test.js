const generateParenthesis = require('../main/Problem24_GenerateParentheses');

test('should return all combinations of parenthesis', () => {
  const res = ['((()))', '(()())', '(())()', '()(())', '()()()'];
  expect(generateParenthesis(3)).toStrictEqual(res);
});
