/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    // convert binary tree to graph
    function dfs(node, parent) {
        if (!node) return;
        
        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }
    
    dfs(root, null);
    
    let queue = [target];
    let seen = new Set([target]);
    let distance = 0;
    
    while (queue.length && distance < k) {
        let currLen = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currLen; i++) {
            let node = queue[i];
            
            for (const neighbor of [node.left, node.right, node.parent]) {
                if (neighbor && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        queue = nextQueue;
        distance++;
    }
    
    return queue.map(node => node.val);
};
// Both the DFS and BFS perform constant work at each node, and only visit each node at most once. Therefore we have a time and space complexity of O(n) (the space comes from the recursion call stack when we assign the parent pointers, the queue, and seen.