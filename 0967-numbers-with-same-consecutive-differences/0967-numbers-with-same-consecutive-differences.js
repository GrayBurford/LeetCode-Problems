/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

let n;
let k;
let res;

const numsSameConsecDiff = (N, K) => {
    n = N;
    k = K;
    res = new Set();
    dfs('');
    return [...res];
};


function dfs (curr) {
    if (curr.length > n) return;
    if (curr.length == n && ok(curr)) {
        res.add(curr);
    }
    
    let start = curr.length == 0 ? 1: 0;
    
    for (let i = start; i < 10; i++) { // build '0-9' string
        curr += i + '';
        
        if (ok(curr)) { // ok, dfs further
            dfs(curr);
            curr = curr.slice(0, -1); // backtracking, withdraw last digit
        } else {
            curr = curr.slice(0, -1); // not ok, no need to dfs further, but change last digit and continue 
        }
    }
};


// check consective absolute difference is all same
function ok (s) {
    if (s.length == 1) return true;
    if (s[0] == '0') return false;
    
    let n = s.length, diff = Math.abs((s[1] - '0') - (s[0] - '0'));
    
    if (diff != k) return false;
    
    for (let i = 2; i < n; i++) {
        let d = Math.abs((s[i] - '0') - (s[i - 1] - '0'));
        if (d != k) return false;
    }
    
    return true;
};

// SOLUTION: henrychen222