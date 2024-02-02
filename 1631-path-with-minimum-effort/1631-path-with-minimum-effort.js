/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    function valid (row, col) {
        return 0 <= row && row < m && 0 <= col && col < n;
    }
    
    
    function check (effort) {
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        let seen = [];
        for (let i = 0; i < m; i++) {
            seen.push(new Array(n).fill(false));
        }
        
        seen[0][0] = true;
        let stack = [[0, 0]];
        
        while (stack.length) {
            const [row, col] = stack.pop();
            if (row === m-1 && col === n-1) {
                return true;
            }
            
            for (const [dx, dy] of directions) {
                let nextRow = row + dy, nextCol = col + dx;
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    if (Math.abs(heights[nextRow][nextCol] - heights[row][col]) <= effort) {
                        seen[nextRow][nextCol] = true;
                        stack.push([nextRow, nextCol]);
                    }
                }
            }
        }
        
        return false;
    }
    
    
    
    let m = heights.length;
    let n = heights[0].length;
    
    let left = 0;
    let right = 0;
    for (const arr of heights) {
        right = Math.max(right, Math.max(...arr));
    }
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};


// If you cannot make the journey with effort, then it's impossible to do it with any number less than effort. If you can do it, then it's possible to do it with all numbers greater than effort.

// Given an integer effort, how can we check if a path exists? We can do a simple DFS, starting from (0, 0), with edges being in the 4 directions and only traversable if the difference between the current node and the next one is less than or equal to effort.

// For our binary search, what should the bounds start at? The minimum possible effort is 0 - there could exist a path where all the numbers are the same. The maximum possible effort is the largest number in the input since the input doesn't have negative numbers.

// First, the problem is asking for the minimum effort. If the task is possible for a given effort, then that means there is some path where all adjacent cells have a difference less than or equal to effort. Surely, the task is also possible with effort + 1, because the path we speak of will also be traversable if we increase the maximum allowed difference.

// Similarly, if the task is not possible for a given effort, it will surely be impossible with effort - 1. If no path existed, then lowering the maximum allowed difference will not create a path. We have identified the two zones.

// Next, we need to identify the search space. Given an arbitrary input, the task might be possible with 0 effort (for example, if every square had the same value). If the largest number in the input is x, we will never need more than x effort. Negative numbers aren't allowed, so there couldn't possibly exist a difference between two elements greater than x. We have identified our search space as [0, x].

// Finally, we need to implement the check function for a given effort. We can model the matrix as a graph like we did many times in the trees and graphs chapter. Perform a DFS from the top left square and attempt to reach the bottom right square. Only traverse to a neighbor if the difference between the nodes is less than or equal to effort.

// The DFS runs in O(m⋅n) time, and the binary search runs it O(log k) times, where k is the maximum element in the input. This gives a time complexity of O(m⋅n⋅log k). To perform the DFS, we are using O(m⋅n) space for the stack and seen.