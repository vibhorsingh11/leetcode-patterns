const search = require('../main/Problem28_BinarySearch');

test('should return index', () => {
  const nums = [-1, 0, 3, 5, 9, 12],
    target = 9;

  expect(search(nums, target)).toBe(4);
});
