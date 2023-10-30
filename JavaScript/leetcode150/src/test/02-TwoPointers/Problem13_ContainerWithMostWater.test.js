const maxArea = require('../main/Problem13_ContainerWithMostWater');

test('should return max area for water', () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

  expect(maxArea(height)).toBe(49);
});
