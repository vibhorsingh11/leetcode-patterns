const evalRPN = require('../../main/04-Stack/Problem03_EvaluateReversePolishNotation');

test('should return value of expression', () => {
  const tokens = ['2', '1', '+', '3', '*'];

  expect(evalRPN(tokens)).toBe(9);
});
