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

// Initialize generic BFS template
// declare base case if root is empty, queue starting at root, and answer variables
// while queue has nodes in it, we will loop over nodes at the current level
// must declare a second queue in JS since it doesn't have a built-in doubly-linked list/deque
// Use for loop to grab first value in queue. Check if it has left/right, and if so, push the node(s) to second queue
// before for loop iterates, grab last value of queue and push to answer variable
// after for loop iterates the length of nodes in one level, assign queue to be recently built nextQueue
// while loop starts again until all nodes have been visited
// return answer