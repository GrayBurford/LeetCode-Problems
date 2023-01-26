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