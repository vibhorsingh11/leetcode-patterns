/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0,
    res = 0;

  function inorder(root, k) {
    if (root === null) return;

    inorder(root.left, k);

    count++;
    if (count === k) {
      res = root.val;
      return;
    }

    inorder(root.right, k);
  }
  inorder(root, k);
  return res;
};

module.exports = kthSmallest;
