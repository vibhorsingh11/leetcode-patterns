const goodNodes = require("../main/Problem35_CountGoodNodesInBinaryTree");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

test("should return the count of good node", () => {
  let root = new TreeNode(3, 1, 4);
  root.left = new TreeNode(1, 3, null);
  root.left.left = new TreeNode(3, null, null);
  root.right = new TreeNode(4, 1, 5);
  root.right.left = new TreeNode(1, null, null);
  root.right.right = new TreeNode(5, null, null);

  expect(goodNodes(root)).toBe(4);
});
