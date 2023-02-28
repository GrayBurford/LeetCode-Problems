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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
    let answer = 0;
    
    if (low <= root.val && root.val <= high) {
        answer += root.val;    
    }
    
    if (root.val > low) {
        answer += rangeSumBST(root.left, low, high);
    }
    if (root.val < high) {
        answer += rangeSumBST(root.right, low, high);
    }
    
    return answer;
};

