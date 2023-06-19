const deleteNode = require("../main/Problem42_DeleteNodeInABST");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should delete the specified node", () => {
  let root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(4);
  root.right = new TreeNode(6);
  root.right.right = new TreeNode(7);

  expect(deleteNode(root, 3).left.val).toBe(4);
});
