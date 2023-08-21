/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(node, minVal, maxVal) {
    if (node === null) {
      return true;
    }

    if (node.val <= minVal || node.val >= maxVal) {
      return false;
    }

    return (
      helper(node.left, minVal, node.val) &&
      helper(node.right, node.val, maxVal)
    );
  }
  return helper(root);
};

module.exports = isValidBST;
