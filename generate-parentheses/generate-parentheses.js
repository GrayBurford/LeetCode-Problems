/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const backtrack = (i, open, curr) => {
        if (i === 0 && open === 0)  res.push(curr);
        
        if (open > 0) {
            backtrack(i, open - 1, curr.concat(')'))
        }
        if (i !== 0) {
            backtrack(i - 1, open + 1, curr.concat('('))    
        }
    }
    
    backtrack(n, 0, '');
    return res;
};