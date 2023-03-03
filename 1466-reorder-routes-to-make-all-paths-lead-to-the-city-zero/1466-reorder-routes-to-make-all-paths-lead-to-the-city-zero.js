/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    function makeHash (row, col) {
        return row + "," + col;
    }
    
    function dfs(node) {
        let answer = 0;
        
        for (const neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                if (roads.has(makeHash(node, neighbor))) {
                    answer++;
                }
                seen[neighbor] = true;
                answer += dfs(neighbor);
            }
        }
        
        return answer;
    }
    
    let roads = new Set();
    let graph = new Map();
    let seen = new Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (const [x, y] of connections) {
        graph.get(x).push(y);
        graph.get(y).push(x);
        roads.add(makeHash(x, y));
    }
    
    seen[0] = true;
    return dfs(0);
};

// how many edges are pointing away from 0
//start dfs from 0 and pretend graph is undirected so we can visit all nodes from node 0
// use set seen to prevent visiting a node more than once
// Once you move forward, add to seen so you have to go forward (away from 0) at every edge.
// record traversal edge
// hash map will map the label of a node to its neighbor
// add all original edges into set named roads
// want our function to return the answer to our original problem. Asking how many edges do we have to turn around. Define dfs() to be how many edges do we need to turn around if we start at 0 and walk away
// If have not yet visited the node (not in seen), then add to set and call dfs on it, and increment ++ since the dfs call will return answer to it
// if (node, neighbor) pairing is in roads, our original input, then we need to turn that edge around, so imcrement ++
// dfs will start at node 0, so need to initialize our set to start with 0
// return dfs(0)