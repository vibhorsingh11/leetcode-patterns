const lowestCommonAncestor = require("../main/Problem38_LowestCommonAncestorOfABinaryTree");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return lowest common node", () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  root.right = new TreeNode(1);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);

  let p = new TreeNode(5);
  let q = new TreeNode(1);

  expect(lowestCommonAncestor(root, p,q).val).toBe(3)
});
