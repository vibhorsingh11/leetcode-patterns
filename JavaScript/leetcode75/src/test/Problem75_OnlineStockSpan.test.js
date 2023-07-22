const StockSpanner = require('../main/Problem75_OnlineStockSpan');

test('should return stock span', () => {
  let test = new StockSpanner();

  expect(test.next(100)).toBe(1);
  expect(test.next(80)).toBe(1);
  expect(test.next(60)).toBe(1);
  expect(test.next(70)).toBe(2);
  expect(test.next(60)).toBe(1);
});
