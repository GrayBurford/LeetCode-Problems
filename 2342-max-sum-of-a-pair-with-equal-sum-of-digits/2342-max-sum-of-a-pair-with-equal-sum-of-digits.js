/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let map = new Map();
    let answer = -1;
    
    for (let num of nums) {
        let numSum = num.toString().split('').map(x => parseInt(x)).reduce((a,n) => a+n);
        if (map.has(numSum)) {
            answer = Math.max(answer, num + map.get(numSum))
        }
        map.set(numSum, Math.max(map.get(numSum) || 0, num))
    }
    
    return answer;
    
}

// Initiate hash map to store digitsum versions of numbers as keys, and an array of input nums that correspond to that digitsum as the values
// Loop over input nums and fill hash map
// 