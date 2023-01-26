/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {    
    let seen = new Map();
    
    let answer = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        let currChar = s[right];
        if (seen.has(currChar)) {
            left = Math.max(left, seen.get(currChar)) ;
        }
        seen.set(currChar, right + 1);
        answer = Math.max(answer, right - left + 1);
    }
    
    
    return answer;
};