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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let output = [];
    
    while (queue.length) {
        let nodesInCurrentLevel = queue.length;
        let nextQueue = [];

        output.push(queue[nodesInCurrentLevel - 1].val);
        
        for (let i = 0; i < nodesInCurrentLevel; i++) {
            let node = queue[i];

            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        queue = nextQueue;
    }
    
    return output;

};