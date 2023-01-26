/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowMap = new Map();
    let colMap = new Map();
    let output = 0;
    
    const convertToKey = arr => {
        let key = "";
        for (const num of arr) {
            key += num + ",";
        }
        return key;
    }
    
    for (const row of grid) {
        let key = convertToKey(row);
        rowMap.set(key, (rowMap.get(key) || 0) + 1);
    }
    
    for (let col = 0; col < grid[0].length; col++) {
        let currCol = [];
        for (let row = 0; row < grid.length; row++) {
            currCol.push(grid[row][col]);
        }
        let key = convertToKey(currCol);
        colMap.set(key, (colMap.get(key) || 0) + 1);
    }
    
    for (const [key, val] of rowMap) {
        output += val * colMap.get(key) || 0;
    }
    
    return output;
    
};

// - Need to compare frequency of each array between 2 hash maps -- rows and cols
// - Need to convert row array into an immutable structure first
// - Loop over rows and fill rowMap with values/frequency count
// - Loop over columns and fill colMap with values/frequncy count (need nested loop to push col values into individually)
// - Once both hash maps have unique arrays as their keys and their frequency as the values, loop again to compare both maps, and multiply row frequency by col frequency for total product of possible pairs.