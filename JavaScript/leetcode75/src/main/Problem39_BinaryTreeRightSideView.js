/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let resArr = [];
    if(root == null){
        return resArr;
    }
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let size = queue.length;
        let levelSize = queue.length;
        while (size > 0) {
          let curr = queue.shift();
          if (size == levelSize) resArr.push(curr.val);
          if (curr.right != null) queue.push(curr.right);
          if (curr.left != null) queue.push(curr.left);
          size--;
        }
    }
    return resArr;
};

module.exports = rightSideView;