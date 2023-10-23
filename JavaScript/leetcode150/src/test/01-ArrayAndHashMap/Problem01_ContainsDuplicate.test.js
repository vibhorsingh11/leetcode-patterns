const containsDuplicate = require('../../main/01-ArrayAndHasMap/Problem01_ContainsDuplicate');

test('should check if it conatins duplicate', () => {
  const nums = [1, 2, 3, 1];

  expect(containsDuplicate(nums)).toBeTruthy();
});
