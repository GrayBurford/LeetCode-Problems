/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let maxLength = 0;
    let zeroes = 0;
    
    for (let right = 0; right < nums.length; right++) {
        // maxLength++;
        
        if (nums[right] === 0) {
            zeroes++;
        }
        
        while (zeroes > k && left <= right) {
            if (nums[left] === 0) {
                zeroes--;
            }
            left++;
            // maxLength--;
        }
                
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

// var longestOnes = function(nums, k) {    
//     let start = 0;    
//     let length = nums.length;
//     let ans = 0,count=0;  
    
//     for(let i=0;i<length;i++){
//         if(!nums[i]) ++count;         
        
//         while(count > k){                        
//             if(!nums[start]) --count;
//             ++start;
//         }
//         ans = Math.max(ans,i-start+1);
//     }    
//     return ans;
// };