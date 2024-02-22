/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mask = 0;
    for (const num of nums) {
        mask ^= num;
    }
    
    return mask;
};

// Your first thought might be to use a hash map to count the frequency of each element and then find the element that only appears once. This would be O(n) time and space, where n is the length of the input array.

// To improve the space complexity, you could sort nums and then iterate over it to check which element doesn't appear twice. Depending on your language's sorting implementation, this could lower the space complexity below O(n), but the time complexity becomes O(n⋅logn).

// Recall what the XOR operation does: "If the number of 1 bits is odd, then the result will be 1. Otherwise, the result is 0". The number that we are looking for is the only number that appears an odd number of times (once).

// We can create a mask and XOR it with every element in the array. Because every other number appears twice, they will all cancel each other, and the answer will be the only number that doesn't get canceled.

// XOR properties: x XOR x = 0 and 0 XOR y = y. Therefore x XOR x XOR y = y.

// We have many instances of x XOR x in the input, which will all result in 0. All these 0 XOR'd with each other will also be 0, which leaves us with 0 XOR y = y as the final answer. Note that the order in which you perform the XORs is irrelevant, which is why this algorithm works.

// This gives us an algorithm with O(n) time and O(1) space. Speaking in practical terms, this algorithm is even faster than the hash map approach because integer and bit operations are extremely fast, whereas a hash map has overhead.