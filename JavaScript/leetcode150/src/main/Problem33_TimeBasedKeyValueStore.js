var TimeMap = function () {
  this.obj = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    //set the key with an array of value and timestamp pair
  if (!this.obj[key]) {
    this.obj[key] = [];
  }
  this.obj[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    //if first arrays timestamp is greater than passed timestamp
  if (!this.obj[key] || this.obj[key][0][1] > timestamp) return '';

  let arr = this.obj[key];
  let left = 0,
    right = arr.length;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    //if mid array has the timestamp then return value
    // else if move the left and right acc.
    if (arr[mid][1] === timestamp) {
      return arr[mid][0];
    } else if (arr[mid][1] <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (right === 0) return '';
  return arr[right - 1][0];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

module.exports = TimeMap;
