/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return root;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      // Can choose either left or right subtree for replacement
      // In left subtree look for max node value
      // In right subtree look for min node value
      let minNode = root.right;
      // Checking left as its BST and smaller values are in left subtree
      while (minNode.left !== null) {
        minNode = minNode.left;
      }
      root.val = minNode.val;
      root.right = deleteNode(root.right, root.val);
    }
  }
  return root;
};

module.exports = deleteNode;
