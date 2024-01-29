/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let binarySearch = (arr, target) => {
        left = 0;
        right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
    
    potions.sort((a, b) => a - b);
    let ans = [];
    let m = potions.length;
    
    for (const spell of spells) {
        let i = binarySearch(potions, success / spell);
        ans.push(m - i);
    }
    
    return ans;
};

// Let's say n = spells.length and m = potions.length. The brute force approach would be to iterate over all pairs and checking which ones have a product greater than success, which has a time complexity of O(n⋅m).

// If a spell has a strength x, then it will form a successful pair with any potion with a strength of at least success / x. If we sort potions, then we can perform a binary search for success / x to find the index of the insertion point. Since we know the length of potions, we also then know how many potions have a strength of at least success / x. If i is the insertion point, then there are m - i potions.

// Let's say we sort potions and have potions = [1, 2, 3, 4, 5], and success = 7.

// We have a spell with a strength of 3. To form a successful pair, we need a potion with a strength of at least 7 / 3 = 2.3333.

// If we do a binary search for this value on potions, we will find an insertion index of 2. Every potion on this index and to the right can form a successful pair. There are 3 indices in total (the potions with strength 3, 4, 5).

// In general, if there are m potions, the final index is m - 1. If the insertion index is i, then the range [i, m - 1] has a size of (m - 1) - i + 1 = m - i.

// We can iterate over the spells, and for each spell, perform a binary search on success / spell to find the insertion index i, then use the formula to find the number of potions that can form a successful pair.

// To sort potions, it costs O(m⋅log m). Then, we iterate n times, performing a O(log m) binary search on each iteration. This gives us a time complexity of O((m+n)⋅log m), which is much faster than O(m⋅n) because log m is small. Because we are sorting the input, some space is used depending on the sorting algorithm used by your language.