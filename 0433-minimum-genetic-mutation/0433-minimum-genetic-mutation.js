/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    function isValidMutation (first, second) {
        let diffs = 0;
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                diffs++;
                if (diffs > 1) return false;
            }
        }
        
        return true;
    }
    
    let queue = [[startGene, 0]];
    let bankSet = new Set(bank);
    
    while (queue.length) {
        let [val, i] = queue.shift();
        if (val === endGene) {
            return i;
        }
        
        for (let b of bankSet) {
            if (isValidMutation(val, b)) {
                queue.push([b, i + 1]);
                bankSet.delete(b);
            }
        }
    }
    
    return -1;
    
};