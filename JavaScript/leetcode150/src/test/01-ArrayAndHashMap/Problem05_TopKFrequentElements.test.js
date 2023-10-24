const topKFrequent = require('../../main/01-ArrayAndHasMap/Problem05_TopKFrequentElements');

test('should return top k frequent', () => {
  const nums = [1, 1, 1, 2, 2, 3],
    k = 2;

  expect(topKFrequent(nums, k)).toStrictEqual([1, 2]);
});
