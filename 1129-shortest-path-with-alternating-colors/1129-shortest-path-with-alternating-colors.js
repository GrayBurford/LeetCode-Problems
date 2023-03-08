/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let addToGraph = (color, edges) => {
        for (let i = 0; i < n; i++) {
            graph.get(color).set(i, []);
        }
        
        for (const [x, y] of edges) {
            graph.get(color).get(x).push(y);
        }
    }
    
    const RED = 0;
    const BLUE = 1;
    
    let graph = new Map();
    graph.set(RED, new Map());
    graph.set(BLUE, new Map());
    addToGraph(RED, redEdges);
    addToGraph(BLUE, blueEdges);
    
    let ans = new Array(n).fill(Infinity);
    let queue = [[0, RED], [0, BLUE]];
    let seen = [];
    for (let i = 0; i < n; i++) {
        seen.push(new Array(2).fill(false));
    }
    
    seen[0][RED] = true;
    seen[0][BLUE] = true;
    
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
            let [node, color] = queue[i];
            ans[node] = Math.min(ans[node], steps);

            for (const neighbor of graph.get(color).get(node)) {
                if (!seen[neighbor][1 - color]) {
                    seen[neighbor][1 - color] = true;
                    nextQueue.push([neighbor, 1 - color]);
                }
            }
        }
        
        queue = nextQueue;
        steps++;
    }
    
    for (let i = 0; i < n; i++) {
        if (ans[i] == Infinity) {
            ans[i] = -1;
        }
    }
    
    return ans;
};

// In the previous questions, we said that the time complexity of graph problems was O(n+e), saying n was the number of nodes in the graph. This is because, in the previous problems, we didn't have state variables other than the current node. When there are more state variables, the time complexity changes from the number of nodes to the number of states. The number of states is the product of the ranges of each state variable. Here, since the range of color is always 2, it doesn't change the time complexity, but in other problems, you may be given a variable state variable like k, in which case the time complexity would be O(k⋅(n+e)). The same can be said about the space complexity because seen can hold potentially all states.