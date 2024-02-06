/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let backtrack = (curr, i) => {
        if (curr.length == k) {
            ans.push([...curr]);
            return;
        }
        
        for (let num = i; num <= n; num++) {
            curr.push(num);
            backtrack(curr, num + 1);
            curr.pop();
        }
    }
    
    ans = [];
    backtrack([], 1);
    return ans;
};

// All subsets of the range [1, n] that are length k.
// Could create an array with numbers from 1 to n, but would be a waste of space. Use the for loop's iteration variable
// Duplicates not allowed -- [1, 2] and [2, 1] are the same
// curr.length = k
// We still make use of the i argument. Initially, i = 1 indicates we are considering 1 and all numbers after it. We iterate with a for loop variable num from i to n. For each num, we add it to curr and then pass num + 1 to the next backtrack call.