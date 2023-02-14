/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let increasing = [];
    let decreasing = [];
    let left = 0;
    let answer = 0;
    
    for (let right = 0; right < nums.length; right++) {
        // maintain the monotonic deques
        while (increasing.length && increasing[increasing.length - 1] > nums[right]) {
            increasing.pop();
        }
        
        while (decreasing.length && decreasing[decreasing.length - 1] < nums[right]) {
            decreasing.pop();
        }
        
        increasing.push(nums[right]);
        decreasing.push(nums[right]);
        
        // maintain window property
        while (decreasing[0] - increasing[0] > limit) {
            if (nums[left] == decreasing[0]) {
                decreasing.shift();
            }
            if (nums[left] == increasing[0]) {
                increasing.shift();
            }
            left++;
        }
        
        answer = Math.max(answer, right - left + 1);
    }
    
    return answer;
};

// initialize increasing monotonic deque and decreasing monotonic deque
// initialize left sliding window pointer and answer output integer
// answer will update with Math.max() using right - left + 1 sliding window technique
// right pointer will incremenent with for loop
// At each element, want to add to our window, by adding to both of our deques
// Before adding to each of our deques, we need to make sure not to break the monotonic property of each deque -- inc and dec -- 2 while loops.
// If adding the next element to our deques will break the property, pop the end off
// After the while loops, we know that we can safely add the new element to our deques without breaking the monotonic property
// Once deques are in order, we can worry about the window property
// max element minus the min element needs to be <= the limit
// max is first element of decreasing, and min is first element of increasing inc[0] and dec[0]
// if window is greater than the limit property, need to remove from the left of both deques
// Then increment left pointer
// after while loops, find new max value, using Math.max(answer, right-left+1)
// Once for loop finishes running, return answer which holds longest continuous subarray with absolute diff less than or equal to limit
