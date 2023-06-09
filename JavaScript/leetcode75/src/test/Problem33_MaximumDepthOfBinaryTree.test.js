const maxDepth = require("../main/Problem33_MaximumDepthOfBinaryTree");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("should return max depth", () => {
  let root = new TreeNode(3, 9, 20);
  root.left = new TreeNode(9, null, null);
  root.right = new TreeNode(20, 15, 7);

  expect(maxDepth(root)).toBe(3);
});
