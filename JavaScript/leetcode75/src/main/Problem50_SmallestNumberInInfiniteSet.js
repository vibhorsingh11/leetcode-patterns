var SmallestInfiniteSet = function () {
  this.currSmall = 1;
  this.addedList = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.addedList.length) {
    return this.addedList.shift();
  } else {
    this.currSmall = this.currSmall + 1;
    return this.currSmall - 1;
  }
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.currSmall > num) {
    if (!this.addedList.includes(num)) {
      this.addedList.push(num);
      this.addedList = this.addedList.sort((a, b) => a - b);
    }
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

module.exports = SmallestInfiniteSet;
