const longestZigZag = require("../main/Problem37_LongestZigZagPathInABinaryTree");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return longest zig zag path", () => {
  let root = new TreeNode(1, null, 1);
  root.right = new TreeNode(1, 1, 1);
  root.right.left = new TreeNode(1, null, null);
  root.right.right = new TreeNode(1, 1, 1);
  root.right.right.left = new TreeNode(1, null, 1);
  root.right.right.left.right = new TreeNode(1, null, 1);
  root.right.right.right = new TreeNode(1, null, null);

  expect(longestZigZag(root)).toBe(3);
});
