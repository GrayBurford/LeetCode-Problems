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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    let stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    
    }
    return root;
};