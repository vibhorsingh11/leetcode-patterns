/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  // total length of whole matrix as it is sorted and last index is less than first
  // index value in next row
  let left = 0,
    right = m * n - 1;
  while (left <= right) {
    let matMid = Math.floor((left + right) / 2);
    let mid = matrix[Math.floor(matMid / n)][matMid % n];
    if (mid === target) {
      return true;
    } else if (mid < target) {
      left = matMid + 1;
    } else {
      right = matMid - 1;
    }
  }
  return false;
};

module.exports = searchMatrix;
