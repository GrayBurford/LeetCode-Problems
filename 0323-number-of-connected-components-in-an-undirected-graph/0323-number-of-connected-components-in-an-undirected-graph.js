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