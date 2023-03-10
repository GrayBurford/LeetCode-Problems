// /**
//  * @param {number[]} arr
//  * @param {number} start
//  * @return {boolean}
//  */
// var canReach = function(arr, start) {
//     let seen = new Map();
//     seen.set(start, true);
    
//     function bfs(i) {
//         if (i < 0 || i > arr.length - 1) return false;
//         if (seen.get(i)) return false;
//         if (arr[i] === 0) return true;

//         seen.set(i, true);

//         return bfs(i + arr[i]) || bfs(i - arr[i]);
//     }
    
//     if (bfs(start + arr[start]) || bfs(start - arr[start])) {
//         return true;
//     }
    
//     return false;
// };

function canReach(arr, start) {
    let visitedIndices = { start: true };
    
    function bfs(i) {
        if (i < 0 || i > arr.length - 1) return false;
        if (visitedIndices[i]) return false;
        if (arr[i] === 0) return true;
        
        visitedIndices[i] = true;
        
        return bfs(i - arr[i]) || bfs(i + arr[i]);
    }
    
    if (bfs(start - arr[start]) || bfs(start + arr[start])) return true;
    
    return false;
};
