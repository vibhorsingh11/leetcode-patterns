const findDuplicate = require('../main/Problem42_FindTheDuplicateNumber');

test('should return the duplicate', () => {
  const nums = [1, 3, 4, 2, 2];

  expect(findDuplicate(nums)).toBe(2);
});
