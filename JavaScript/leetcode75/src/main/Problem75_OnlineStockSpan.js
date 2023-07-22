var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let [curPrice, curSpan] = [price, 1];

  // Compute price span in stock data with monotonic stack
  while (
    this.stack.length &&
    this.stack[this.stack.length - 1].price <= curPrice
  ) {
    prev = this.stack.pop();
    let [prevPrice, prevSpan] = [prev.price, prev.span];

    // update current price span with history data in stack
    curSpan += prevSpan;
  }
  this.stack.push({ price: curPrice, span: curSpan });

  return curSpan;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

module.exports = StockSpanner;
