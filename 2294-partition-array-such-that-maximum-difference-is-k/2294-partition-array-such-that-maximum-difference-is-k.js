/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a,b) => a-b);
    let ans = 1;
    let x = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - x > k) {
            ans++;
            x = nums[i];
        }
    }
    return ans;
};

// sort nums least to greatest
// smallest num has to be in some group, so might as well start with the smallest number to maximize groups
// loop over sorted nums, checking ith value minus the smallest element (x = nums[0]) each loop to be <= k
// if <= k, continue. If not, the next item has to be in a new group, so increment ans++ and reassign x to that ith value
// after looping over nums ends, return ans