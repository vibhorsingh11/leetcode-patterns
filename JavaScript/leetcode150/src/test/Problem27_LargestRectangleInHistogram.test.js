const largestRectangleArea = require('../main/Problem27_LargestRectangleInHistogram');

test('should return largest Rectangle Area', () => {
  const heights = [2, 1, 5, 6, 2, 3];

  expect(largestRectangleArea(heights)).toBe(10);
});
