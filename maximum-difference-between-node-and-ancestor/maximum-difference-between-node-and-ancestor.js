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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if (!root) return 0;
    
    let maxDiff = -Infinity;
    
    function dfs(currNode, currMin, currMax) {
        
        maxDiff = Math.max(maxDiff, Math.abs(currMin - currMax));
        
        if (currNode.left) {
            const min = Math.min(currMin, currNode.left.val);
            const max = Math.max(currMax, currNode.left.val);
            dfs(currNode.left, min, max);
        }
        
        if (currNode.right) {
            const min = Math.min(currMin, currNode.right.val);
            const max = Math.max(currMax, currNode.right.val);
            dfs(currNode.right, min, max);
        }
        
    }
    
    dfs(root, root.val, root.val);
    return maxDiff;
};