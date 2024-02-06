/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const hashMap = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    };
    
    let ans = [];
    
    function permute (str, i) {
        // base case: reached end of input
        if (i === digits.length) {
            ans.push(str);
            return;
        }
        
        for (let each of hashMap[digits[i]]) {
            permute(str + each, i + 1);
        }
        
    }
    
    permute("", 0);
    
    return ans;    
}
