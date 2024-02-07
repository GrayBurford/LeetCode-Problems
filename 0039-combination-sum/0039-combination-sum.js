/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function backtrack(path, start, curr) {
        if (curr === target) {
            ans.push([...path]);
        }
        
        for (let i = start; i < candidates.length; i++) {
            let num = candidates[i];
            
            if (curr + num <= target) {
                path.push(num); // push num to path
                backtrack(path, i, curr + num); // call backtrack on new path.
                // want to make next call from curr element, not next (i +1)
                path.pop(); // pop last num off
            }
        }
    }
    
    let ans = [];
    backtrack([], 0, 0);
    return ans;
};

// In this problem, we'll have an argument path represent the numbers in the current path (this is what curr did in the previous article). We'll have an argument start that represents where in the input we should start iterating from (this is what i did in the previous article). Finally, we'll have curr represent the sum of all the numbers in path. While this is not necessary because we could just calculate it from path, it makes our algorithm more efficient as we won't need to calculate it from scratch at every node.

// When we add an element to path and move to a child node, we should also add the value to curr. When we move back up the tree and remove an element from path, we should also subtract the value from curr. If adding an element would cause curr to exceed target, then we should not add it - the input doesn't have negative numbers, so if we exceed target then we will never reach out.

// Our base case is when curr = target. While the base cases will be leaf nodes, not all leaf nodes will be the base case. If we have a node where curr < target, but adding any number would cause curr > target, then that will also be a leaf. We should only add path to the answer if curr = target.