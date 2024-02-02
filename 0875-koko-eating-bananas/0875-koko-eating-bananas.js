/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let check = k => {
        let hours = 0;
        for (const bananas of piles) {
            hours += Math.ceil(bananas / k);
        }
        
        return hours <= h;
    }
    
    let left = 1;
    let right = Math.max(...piles);
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};