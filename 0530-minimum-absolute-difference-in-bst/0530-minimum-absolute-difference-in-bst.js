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
var getMinimumDifference = function(root) {
    
    function dfs(root) {
        if (!root) return [];
        
        let left = dfs(root.left);
        let right = dfs(root.right);
        
        left.push(root.val);
        left.push(...right);
        return left;
    }
    
    let values = dfs(root);
    let answer = Infinity;
    
    for (let i = 1; i < values.length; i++) {
        answer = Math.min(answer, values[i] - values[i-1]);
    }
    
    return answer;
};