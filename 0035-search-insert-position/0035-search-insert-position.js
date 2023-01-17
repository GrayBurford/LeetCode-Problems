/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length-1]) return nums.length;

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);
        if (target === nums[start]) return start;
        if (target === nums[end]) return end;
        if (target === nums[mid]) return mid;
    
        if (target < nums[mid]) {
            end = mid-1;
            if (target > nums[end]) return end+1;
        }

        if (target > nums[mid]) {
            start = mid+1;
            if (target < nums[start]) return start;
        }
    }
    
};