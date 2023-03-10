/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    // checks for neighbors of a given node (i.e. if 7, return 6 and 8)
    function neighbors(node) {
        let answer = [];
        for (let i = 0; i < 4; i++) {
            let num = node[i];
            for (const change of [-1, 1]) {
                let x = (+num + change + 10) % 10;
                answer.push(node.slice(0, i) + x + node.slice(i + 1));
            }
        }
        
        return answer;
    }
    
    
    if (deadends.includes("0000")) {
        return -1;
    }
    
    let queue = ["0000"];
    let seen = new Set(deadends);
    seen.add("0000");
    
    let steps = 0;
    
    while (queue.length) {
        let currLen = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currLen; i++) {
            const node = queue[i];
            if (node === target) {
                return steps;
            }
            
            for (const neighbor of neighbors(node)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        steps++;
        queue = nextQueue;
        
    }
    
    return -1;
};