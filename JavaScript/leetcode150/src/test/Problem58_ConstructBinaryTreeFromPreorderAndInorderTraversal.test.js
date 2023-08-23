const buildTree = require('../main/Problem58_ConstructBinaryTreeFromPreorderAndInorderTraversal');

test('should return binary tree', () => {
  const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];

  expect(buildTree(preorder, inorder).val).toBe(3);
  expect(buildTree(preorder, inorder).left.val).toBe(9);
  expect(buildTree(preorder, inorder).right.val).toBe(20);
  expect(buildTree(preorder, inorder).right.left.val).toBe(15);
  expect(buildTree(preorder, inorder).right.right.val).toBe(7);
});
