/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {    
//     let seen = new Map();
    
//     let answer = 0;
//     let left = 0;
    
//     for (let right = 0; right < s.length; right++) {
//         let currChar = s[right];
//         if (seen.has(currChar)) {
//             left = Math.max(answer, seen.get(currChar)) ;
//         }
//         seen.set(currChar, right + 1);
//         answer = Math.max(answer, right - left + 1);
//     }
    
    
//     return answer;
// };

const lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;  // start of the current substring
    let seen = {};  // hashmap to keep track of characters in the current substring
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seen[char]) {
            // if the character is in the hashmap, then we know that we have seen it before
            // so we need to update the start of the current substring
            start = Math.max(start, seen[char]);
        }
        // we add the current character to the hashmap
        seen[char] = i + 1;
        // we update the longest substring
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
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