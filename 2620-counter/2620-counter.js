/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let curr = n-1;
    return function() {
        curr++
        return curr;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */