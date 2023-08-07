const MinStack = require('../main/Problem22_MinStack');

test('should return min stack', () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toBe(-3);
});
