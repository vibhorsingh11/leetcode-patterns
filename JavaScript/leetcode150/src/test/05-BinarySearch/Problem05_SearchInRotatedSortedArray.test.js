const search = require('../../main/05-BinarySearch/Problem05_SearchInRotatedSortedArray');

test('should return index of target', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 0;

  expect(search(nums, target)).toBe(4);
});
