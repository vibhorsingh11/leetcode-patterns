const MedianFinder = require('../main/Problem66_FindMedianFromDataStream');

test('should return median', () => {
  let medianFinder = new MedianFinder();
  medianFinder.addNum(1);
  medianFinder.addNum(2);
  expect(medianFinder.findMedian()).toBe(1.5);
});
