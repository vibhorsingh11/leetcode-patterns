const searchBST = require("../main/Problem41_SearchInABinarySearchTree");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return the sub tree with the root node value", () => {
  let root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right = new TreeNode(7);
  expect(searchBST(root, 2)?.left?.val).toBe(1);
});
