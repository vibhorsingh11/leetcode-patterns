/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 0;

  function helper(root, max) {
    if (max <= root.val) {
      count++;
      max = root.val;
    }
    if (root.left) helper(root.left, max);
    if (root.right) helper(root.right, max);
  }

  helper(root, Number.NEGATIVE_INFINITY);
  return count;
};

module.exports = goodNodes;
