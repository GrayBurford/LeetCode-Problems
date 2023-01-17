/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if ( i !== j && nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// function twoSum (nums, target) {
//     let sorted = nums.sort((a,b) => a-b);
    
//     let left = 0;
//     let right = sorted.length - 1;
    
//     while (left < right) {
//         let curr = sorted[left] + sorted[right];
        
//         if (curr === target) {
//             return [original.indexOf(sorted[left]), original.indexOf(sorted[right])]
//         }
        
//         if (curr > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

function twoSum (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const temp = target - nums[i];
        const index = nums.indexOf(temp);
        
        if (index !== -1 && index !== i) return [i, index];
    }
}