const canPartition = require('../main/Problem106_PartitionEqualSubsetSum');

test('should return true if subset is possible', () => {
  const nums = [1, 5, 11, 5];

  expect(canPartition(nums)).toBeTruthy();
});
