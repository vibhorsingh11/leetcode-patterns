/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  let res = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      let curr = queue.shift();
      if (1 === size) res.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      size--;
    }
  }
  return res;
};

module.exports = rightSideView;
