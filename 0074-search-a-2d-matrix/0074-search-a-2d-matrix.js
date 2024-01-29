/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = (m*n) - 1;
    let mid;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        let currNum = matrix[row][col];
        
        if (currNum === target) return true;
        
        if (currNum < target) {
            left = mid + 1;
        }
        
        if (currNum > target) {
            right = mid - 1;
        }
    }
    
    return false;
};

// Because each row is sorted and fully less than the next row, we can treat the matrix as one array. This hypothetical single array has a length of m * n. If we consider the indices between [0, m * n - 1], then how do we find the row and column that each index converts to?

// Each row has n elements. That means that row 0 is indices [0, n - 1]. Row 1 is indices [n, 2 * n - 1], and so on. This is equivalent to the floor division of n, aka row = i // n - the row increments every n indices.

// The column can range between [0, n - 1]. Every n indices, the column resets to 0. This is perfect for the modulo operator. col = i % n.

// Then, we can just binary search on this hypothetical single array. The following image demonstrates the indices of this hypothetical single array on the 2d matrix.

// We need to reduce this problem to the previous example so we can apply the same binary search algorithm.

// Let's say that there are n columns. Each row has n elements. The first n indices belong to row 0. The next n indices belong to row 1, and so on.

// If an element is in row, then there are row * n elements above it in the grid. Given an index i, we can find the row it belongs to by dividing by n. For example, in the image, index 9 belongs to row 2. There are four elements per row and we have 9 / 4 = 2. This makes sense as there are eight elements above row 2, so indices 8, 9, 10, 11 all belong to row 2.

// To find the column given an index i, we just take i % n. Index 0 belongs to the 0th column, and then every n indices we are back in the 0th column. Index 1 belongs to the 1st column, and then every n indices we are back in the 1st column. Because each column is spaced by n indices, the modulus operator gives us the column.

// Once we can convert an index i to a (row, col), we can treat the matrix as a normal array and perform a binary search over it, like we did in the previous example.