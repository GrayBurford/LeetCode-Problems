/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    function backtrack (curr, i) {
        // this base case will never actually get hit, since backtrack can't be called outside the length of the nums input. But good to include here for clarity
        if (i > nums.length) {
            return;
        }
        
        ans.push([...curr]);
        
        for (let j = i; j < nums.length; j++) {
            curr.push(nums[j]);
            backtrack(curr, j+1);
            curr.pop();
        }
    }
    
    let ans = [];
    backtrack([], 0);
    return ans;
};

// The first important thing to understand is what the argument i represents. In the previous problem, we iterated over the entire input at each node. We cannot do that here, as it would produce duplicate subsets. For example, if we have nums = [1, 2, 3], then we would at one point have curr = [1, 2]. When we finish the subtree with 1 at the first position, we would try 2 at the first position next. If we considered all numbers at each node, we would end up with curr = [2, 1], which is a duplicate of [1, 2] since the order doesn't matter here.

// As such, when we add an element to curr, we only want to consider elements that come after that element for the entire subtree. We use an argument i that tells us where to start iterating from at each node. If we add an element at index j, we pass j + 1 to the next call.

// Now that we understand what i does, let's talk about the differences in implementation between this problem and the previous one. In the previous problem, the answer nodes were the leaf nodes (as the leaf nodes represented curr having a length of n). In this problem, a subset can have any length, so every node is an answer (even the root, as the root represents the empty subset []). Therefore, the first thing we will do at each node is add curr to the answer.

// The only other difference is that we will iterate over the input starting from i instead of iterating over the entire input. As mentioned above, this will ensure that we don't have duplicates in our answer.