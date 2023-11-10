const search = require('../../main/05-BinarySearch/Problem01_BinarySearch');

test('should return index', () => {
  const nums = [-1, 0, 3, 5, 9, 12],
    target = 9;

  expect(search(nums, target)).toBe(4);
});
