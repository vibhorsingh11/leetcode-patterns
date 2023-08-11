const searchMatrix = require('../main/Problem29_SearchA2DMatrix');

test('should return true if exist', () => {
  const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target = 3;

  expect(searchMatrix(matrix, target)).toBeTruthy();
});
