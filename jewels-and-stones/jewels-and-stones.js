/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let output = 0;
    let jewelsSet = new Set(jewels);
    
    for (const stone of stones) {
        if (jewelsSet.has(stone)) {
            output++
        }
    }
    
    return output;
};

// - Convert jewels to a set (removes duplicates)
// - Loop over my stones and check if the stone is in jewels.
// - If yes, output++
// - return output