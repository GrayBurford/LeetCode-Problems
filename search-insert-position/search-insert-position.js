/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 1) {
        if (target === nums[0]) return 0;
        return target > nums[0] ? 1 : 0;
    }
    
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    let left = 0;
    let right = nums.length - 1;
    let mid;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target < nums[mid]) {
            right = mid - 1;
        }
        if (target > nums[mid]) {
            left = mid + 1;
        }
        if (target === nums[mid]) {
            return mid;
        }        
    }
    
    return left;
};

// SORTED is key in this problem, which means we can use binary search
// instantiate left and right pointers
// while loop while left <= right
// check if target is less than or greater than mid (or equal)
// if not found, reset right or left bounds to meet new range of possible values
