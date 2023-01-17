/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((a,c) => a+c);
    }
    
    return Math.max(...accounts);
};