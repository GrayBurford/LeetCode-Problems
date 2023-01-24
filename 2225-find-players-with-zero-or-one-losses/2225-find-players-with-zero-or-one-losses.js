/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // let matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
    let map = new Map();
    let zeroes = [];
    let ones = [];
    
    for (let match of matches) {
        map.set(match[0], (map.get(match[0]) || 0));
        map.set(match[1], (map.get(match[1]) || 0) + 1);
    }
    
    for (const [key, val] of map) {
        if (val === 0) {
            zeroes.push(key);
        }
        if (val === 1) {
            ones.push(key)
        }
    }
    
    zeroes.sort((a,b) => a-b);
    ones.sort((a,b) => a-b);
    
    return [zeroes, ones];
};