/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function helper(preorder, inorder, inStart, inEnd, preIndex) {
    if (preIndex > preorder.length - 1 || inStart > inEnd) {
      return null;
    }
    let root = new TreeNode(preorder[preIndex]);
    preIndex++;

    let index = inorder.indexOf(root.val);

    root.left = helper(preorder, inorder, inStart, index - 1, preIndex);
    root.right = helper(
      preorder,
      inorder,
      index + 1,
      inEnd,
      preIndex + index - inStart
    );
    return root;
  }
  return helper(preorder, inorder, 0, inorder.length - 1, 0);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = buildTree;
