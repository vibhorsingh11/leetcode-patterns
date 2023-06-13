/**
 * @param {TreeNode} root
 * @return {number}
 */
let totalLongestPath = 0;
var longestZigZag = function (root) {
  if (root == null) return 0;
  helperZigZag(root.left, "left", 0);
  helperZigZag(root.right, "right", 0);
  return totalLongestPath;
};

let helperZigZag = function (root, direction, steps) {
  if (root == null) return;
  totalLongestPath = Math.max(totalLongestPath, steps);
  if (direction === "left") {
    helperZigZag(root.left, "right", steps + 1);
    helperZigZag(root.right, "left", 1);
  } else {
    helperZigZag(root.right, "left", steps + 1);
    helperZigZag(root.left, "right", 1);
  }
};

module.exports = longestZigZag;
