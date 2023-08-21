/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  let queue = [];
  let res = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let tempArr = [];
    while (size > 0) {
      let curr = queue.shift();
      tempArr.push(curr.val);
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
      size--;
    }
    res.push(tempArr);
  }
  return res;
};

module.exports = levelOrder;
