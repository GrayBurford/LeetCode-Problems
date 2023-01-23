/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let set = new Set(arr);
    let out = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i]+1)) {
            out++;
        }
    }
    
    return out;
};