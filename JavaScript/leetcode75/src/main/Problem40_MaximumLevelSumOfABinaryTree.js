/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  // if(root === null) return 0;
  let level = 0,
    maxSum = Number.MIN_VALUE,
    res = 0;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    let sumAtLevel = 0;
    level++;
    while (size > 0) {
      let currNode = queue.shift();
      sumAtLevel += currNode?.val;
      if (currNode?.left !== null) queue.push(currNode?.left);
      if (currNode?.right !== null) queue.push(currNode?.right);
      size--;
    }
    if (maxSum < sumAtLevel) {
      maxSum = sumAtLevel;
      res = level;
    }
  }
  return res;
};

module.exports = maxLevelSum;
