/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let output = [];
    
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (map.get(key) === undefined) {
            map.set(key, []);
        }
        
        map.get(key).push(str)
    }
    
    for (const group of map.values()) {
        output.push(group)
    }
    
    return output;
};