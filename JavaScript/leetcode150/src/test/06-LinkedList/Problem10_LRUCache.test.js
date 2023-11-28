const LRUCache = require('../../main/06-LinkedList/Problem10_LRUCache');

test('should work as LRU cache', () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toBe(1);
  cache.put(3, 3);
  expect(cache.get(2)).toBe(-1);
});
