/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     return nums.map(num => num**2).sort((a,b) => a-b);
// };

function sortedSquares (nums) {
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result.unshift(nums[right] ** 2);
            right--;
        } else {
            result.unshift(nums[left] ** 2);
            left++;
        }
        
    }
    
    return result;
}