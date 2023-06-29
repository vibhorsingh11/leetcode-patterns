/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const array = [];
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    array.push([nums1[i], nums2[i]]);
  }
  array.sort((a, b) => b[1] - a[1]);

  let ans = 0;
  let sum = 0;
  const minHeap = new MinHeap([]);
  for (const [valueOne, valueTwo] of array) {
    sum += valueOne;
    minHeap.insert(valueOne);

    if (minHeap.getLength() > k) sum -= minHeap.remove();
    if (minHeap.getLength() === k) ans = Math.max(ans, sum * valueTwo);
  }

  return ans;
};

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  getLength() {
    return this.heap.length;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(array, i, array.length - 1);
    }
    return array;
  }

  peek() {
    return this.heap[0];
  }

  siftUp(array) {
    let idx = array.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0) {
      if (array[idx] < array[parentIdx]) {
        this.swap(array, idx, parentIdx);
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      } else {
        break;
      }
    }
  }

  insert(num) {
    this.heap.push(num);
    this.siftUp(this.heap);
  }

  siftDown(array, idx, endIdx) {
    let leftChildIdx = idx * 2 + 1;
    while (leftChildIdx <= endIdx) {
      let idxToSwap = leftChildIdx;
      let rightChildIdx = idx * 2 + 2;
      if (
        rightChildIdx <= endIdx &&
        array[rightChildIdx] < array[leftChildIdx]
      ) {
        idxToSwap = rightChildIdx;
      }
      if (array[idxToSwap] < array[idx]) {
        this.swap(array, idxToSwap, idx);
        idx = idxToSwap;
        leftChildIdx = idx * 2 + 1;
      } else {
        break;
      }
    }
  }

  remove() {
    const valueToRemove = this.heap[0];
    this.swap(this.heap, 0, this.heap.length - 1);
    this.heap.pop();
    this.siftDown(this.heap, 0, this.heap.length - 1);

    return valueToRemove;
  }

  swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

module.exports = maxScore;
