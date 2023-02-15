/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []; // monotonic increasing
    let answer = new Array(nums1.length).fill(-1);
    let hash = {}; // hashmap will store nums in nums1 and their indices
    
    // populate hashmap
    nums1.forEach((num, i) => {
        hash[num] = i;
    });
    
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            const stackEnd = stack[stack.length - 1];
            const index = hash[stackEnd];
            
            if (index !== undefined) {
                answer[index] = nums2[i];
            }
            
            stack.pop();
        }
        
        stack.push(nums2[i]);
    }
    
    return answer;
};

// 
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]