/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort(function (a, b) {
            return b - a;
        })
        
        let heaviest = stones.shift();
        let secondHeaviest = stones.shift();
        
        if (heaviest !== secondHeaviest) {
            stones.push(Math.abs(heaviest - secondHeaviest))
        }
    }
    
    return stones.length === 0 ? 0 : stones[0];
};

