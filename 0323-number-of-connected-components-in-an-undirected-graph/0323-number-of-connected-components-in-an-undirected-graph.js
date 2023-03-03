/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let answer = 0;
    let seen = new Array(n).fill(false);
    
    // instantiate and set up graph from given info
    let graph = new Map();
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (let [x, y] of edges) {
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    
    
    
    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            answer++;
            dfs(i);
        }
    }
    
    
    return answer;
};

// Need answer/components variable
// Start a seen array to log when we have visited a node
// Build graph from input info: instantiate map, set each node to empty array, loop over edges input and push neighbors into hash map
// dfs function to traverse neighbors from given node. Loop over a node's neighbors, check if that neighbor has already been seen/visited, and if not, set seen[neighbor] to be visited/true, then recursively call dfs on neighbor
// Where do we start our dfs? How do we know which nodes haven't been visited?
// Start dfs everywhere at the same time -- loop over all n nodes, checking first if node has been visited, and if not increment components answer and call dfs on that node
// return answer