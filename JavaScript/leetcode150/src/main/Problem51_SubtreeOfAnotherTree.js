/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot){
    if(root === null || subRoot === null) return false;
    if(isSame(root, subRoot)) return true;

    function isSame(root, subRoot){
        if(!root && !subRoot) return true;
        // if(root === null || subRoot === null) return false;
        if(root.val !== subRoot.val) return false;
        return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

module.exports = isSubtree;