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
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    
    let diameter = 0;
    
    function helper(currNode) {
        if (!currNode) return 0;
        
        let left = helper(currNode.left);
        let right = helper(currNode.right);
        
        diameter = Math.max(diameter, left + right);
        
        return Math.max(left, right) + 1;
    }
    
    helper(root);
    return diameter;
};

// Initialize diameter variable globally
// helper function will update diameter after checking subsequent node's left/right paths with Math.max.
// helper function takes the current node as its argument and recursively call itself for each node's left/right values
// if node is undefined, return 0 (not an additional leaf, so can't add 1)
// Update diameter with math.max diameter, left+right
// return Math.max left, right (to hold onto longest path's length), + 1 for original node call
// Once all nodes have been visited, all helper calls have finished, return diameter