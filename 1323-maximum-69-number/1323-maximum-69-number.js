/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numArr = Array.from(num.toString());
    let idx = numArr.findIndex(num => num === '6');
    
    if (idx > -1) {
        numArr[idx] = '9'
    }
    
    return parseInt(numArr.join(''));
};

// only want to switch a 6 to a 9, never a 9 to a 6
// start left to right to make the biggest number
// Convert num to array
// loop over values in array for first occurrence of a 6, then switch that value to 9
// can then break loop and continue
// when loop ends, no matter if a 6 was converted to 9, or number had no 9s, return joined array, converted back to integer