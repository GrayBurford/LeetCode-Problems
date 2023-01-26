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


// - Use sliding window and hash map
// - hash map to log the frequency of each character in string input
// - sliding window to track left and right windows for substring validity
// - Fill hash map during iteration of sliding window
// - If next char doesn't already exist in hash map, move right pointer 1 index
// - If next char does already exist in hash map, move left pointer forward
// - while left <= right?
// - Need to track current value as right pointer (for loop moving right pointer)
// - After each loop iteration, calculate max length of valid subarray with Math.max(answer, right - left + 1)?