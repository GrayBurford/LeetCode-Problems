/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let counts = new Map();
    let output = 0;
    const balloon = "balloon";
    
    for (let char of text) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }
    
    while (counts.size) {
        for (char of balloon) {
            if (counts.get(char) === undefined) {
                return output;
            }
            
            counts.set(char, (counts.get(char) - 1));
            
            if (counts.get(char) === 0) {
                counts.delete(char);
            }
        } 
        
        output++;
    }

    return output;
};

// - Loop over text and add each character to a hash map that tracks the characters frequency (count)
// - Start while loop for the size of hash map
// - Loop over characters in balloon, and remove 1 count from each character in hash map for each occurrence
// - If char is undefined (doesn't exist), then return output count
// - If character does exist and we subtract 1 count, also check if count is now 0, so we can then delete char from map
// - After for loop, output++ (counts number of times balloon can be successfully spelled)
