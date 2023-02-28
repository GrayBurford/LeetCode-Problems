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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let answer = [];
    let counter = 0;
    
    while (queue.length) {
        let numNodesInCurrLevel = queue.length;
        let nextQueue = [];
        let currLevel = [];
        
        for (let i = 0; i < numNodesInCurrLevel; i++) {
            let node = queue[i]; 
            
            if (counter % 2 === 0) {
                currLevel.push(node.val);
            } else {
                currLevel.unshift(node.val);
            }
            
            if (node.left) {
                nextQueue.push(node.left);
            }
            
            if (node.right) {
                nextQueue.push(node.right);
            }
            
        }
        
        counter++;
        answer.push(currLevel);        
        queue = nextQueue;
    }
    
    return answer;
};