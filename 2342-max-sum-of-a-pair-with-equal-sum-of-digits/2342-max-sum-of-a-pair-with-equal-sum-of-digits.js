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

// each key only stores an integer: the largest numSum.