/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root == null || root.val == val) return root;
  if (root.val > val) return searchBST(root.left, val);
  return searchBST(root.right, val);
};

module.exports = searchBST;
