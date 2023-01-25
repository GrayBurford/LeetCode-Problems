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
// - 
