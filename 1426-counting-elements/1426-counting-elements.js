/**
 * @param {number[]} arr
 * @return {number}
 */
// var countElements = function(arr) {
//     let set = new Set(arr);
//     let out = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (set.has(arr[i]+1)) {
//             out++;
//         }
//     }
    
//     return out;
// };

var countElements = function(arr) {
    let seen = new Set(arr);
    let ans = 0;
    
    for (let num of arr) {
        if (seen.has(num+1)) {
            ans++;
        }
    }
    
    return ans;
};
