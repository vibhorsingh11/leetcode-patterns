const KthLargest = require('../main/Problem61_KthLargestElementInAStream');

test('should return kth largest', () => {
  let test = new KthLargest(3, [4, 5, 8, 2]);
  expect(test.add(3)).toBe(4);
  expect(test.add(5)).toBe(5);
  expect(test.add(10)).toBe(5);
});
