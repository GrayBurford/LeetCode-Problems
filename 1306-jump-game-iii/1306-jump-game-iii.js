// /**
//  * @param {number[]} arr
//  * @param {number} start
//  * @return {boolean}
//  */

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

// declare seen variable
// recursively call a bfs on starting position's 2 posible moves
// bfs will check that the new index is in bounds of the array, that it hasn't already been visited, and if the value is 0
// If in bounds, not seen, and not target value, mark those new indices as "seen" with -1, and return recursive call on those indices 2 moves
