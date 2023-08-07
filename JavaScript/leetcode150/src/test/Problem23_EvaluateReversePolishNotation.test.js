const evalRPN = require('../main/Problem23_EvaluateReversePolishNotation');

test('should return value of expression', () => {
  const tokens = ['2', '1', '+', '3', '*'];

  expect(evalRPN(tokens)).toBe(9);
});
