/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    let seen = new Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (const [x, y] of edges) {
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    
    function dfs(node) {
        if (node === destination) {
            return true;
        }
        
        if (!seen[node]) {
            seen[node] = true;
            for (const next of graph.get(node)) {
                if (dfs(next)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    return dfs(source);
    
};

// edges[0] does not represent every edge to/from node 0
// use dfs function to check source node
// store visited nodes in a set
// once dfs is completed, check set to see if it includes destination