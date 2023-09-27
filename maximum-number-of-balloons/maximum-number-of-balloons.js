/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let freqMap = new Map();
    let ans = 0;
    
    for (let char of text) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    while (freqMap.size) {
        for (const char of "balloon") {
            if (freqMap.get(char) === undefined) {
                return ans;
            }
            
            freqMap.set(char, (freqMap.get(char) - 1));
            
            if (freqMap.get(char) === 0) {
                freqMap.delete(char);
            }
        } 
        
        ans++;
    }

    return ans;
};

// - Loop over text and add each character to a hash map that tracks the characters frequency (count)
// - Start while loop for the size of hash map
// - Loop over characters in balloon, and remove 1 count from each character in hash map for each occurrence
// - If char is undefined (doesn't exist), then return ans count
// - If character does exist and we subtract 1 count, also check if count is now 0, so we can then delete char from map
// - After for loop, ans++ (counts number of times balloon can be successfully spelled)
