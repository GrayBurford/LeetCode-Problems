/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    let graph = new Map();
    let seen = new Array(n).fill(false);
    let answer = 0;
    
    for (const num of restricted) {
        seen[num] = true;
    }
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (const [x, y] of edges) {
        graph.get(y).push(x);
        graph.get(x).push(y);
    }
    
    function dfs(node) {
        if (graph.get(node)) {
            answer++;
            seen[node] = true;
        }
        
        for (let neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                dfs(neighbor);
            }
        }
        
    }
    
    dfs(0);
    
    return answer;
};

// Instantiate graph variable with new Map, seen variable with array filled with false, and answer variable starting 0
// Loop over restricted nodes and mark them seen as true, so DFS won't call on them
// Build graph by looping over n, setting graph of each node to empty array
// Loop over edges x, y and push the values into graph
// write DFS helper function to get node, add 1 to answer, mark node as true
// Second half of DFS loops over current node's neighbors, and recursively calls dfs on each neighbor as long as it isn't already seen/restricted
// initiate algorithm by calling dfs on 0, which is guaranteed to NOT be restricted node, otherwise would have to loop through all of n and call dfs on each node
// return answer