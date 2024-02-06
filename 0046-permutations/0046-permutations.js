/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function backtrack (curr) {
        if (curr.length === nums.length) {
            ans.push([...curr]);
            return;
        }

        for (const num of nums) {
            if (!curr.includes(num)) {
                curr.push(num);
                backtrack(curr);
                curr.pop();
            }
        }
    }
    
    let ans = [];
    backtrack([]);
    return ans;
};

// When adding to ans, need to create a copy of curr because curr is only a reference to the array's address
// The time complexity of this algorithm is very slow, but the input says that 1 <= nums.length <= 6, so it is to be expected. Let n = nums.length. The initial call to backtrack (the "root" of the tree), makes n calls. Each of those calls makes n - 1 calls (avoiding duplicates), and each of those makes n - 2, and so on. As such, we can expect approximately O(n!) calls. In the function, we have a loop over the n input elements, and in each iteration, we check if num is already in curr, which costs O(n). Thus, we can estimate each function call to cost about O(n^2). Note that we could optimize this process by keeping track of elements in curr using a separate hash set, allowing us to perform the checks in O(1).