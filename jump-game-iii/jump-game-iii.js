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
    let seen = [];   
    
    function bfs(i) {
        if (i < 0 || i > arr.length - 1) return false;
        if (seen[i] < 0) return false;
        if (arr[i] === 0) return true;
        
        seen[i] = -1;
        
        return bfs(i - arr[i]) || bfs(i + arr[i]);
    }
    
    if (bfs(start - arr[start]) || bfs(start + arr[start])) return true;
    
    return false;
};
