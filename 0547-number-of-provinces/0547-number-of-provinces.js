/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            // below if logic prevents cycles
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    // start graph framework with new Map()
    let n = isConnected.length;
    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    // Fill graph with neighbor relationships
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (isConnected[i][j]) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }
    
    // start seen variable to add nodes to once visited
    let seen = new Array(n).fill(false);
    let answer = 0;
    
    // iterate over all nodes, checking if each is in set. If not in set, we found a new connected component
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            answer++;
            seen[i] = true;
            dfs(i);
        }
    }
    
    return answer;
};