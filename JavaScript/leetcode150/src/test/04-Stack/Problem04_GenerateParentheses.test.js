const generateParenthesis = require('../../main/04-Stack/Problem04_GenerateParentheses');

test('should return all combinations of parenthesis', () => {
  const res = ['((()))', '(()())', '(())()', '()(())', '()()()'];
  expect(generateParenthesis(3)).toStrictEqual(res);
});
