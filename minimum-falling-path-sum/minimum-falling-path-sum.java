class Solution {
    public int minFallingPathSum(int[][] matrix) {
        int minFallingSum = Integer.MAX_VALUE;
        Integer memo[][] = new Integer[matrix.length][matrix[0].length];

        // start a DFS (with memoization) from each cell in the top row
        for (int startCol = 0; startCol < matrix.length; startCol++) {
            minFallingSum = Math.min(minFallingSum,
                findMinFallingPathSum(matrix, 0, startCol, memo));
        }
        return minFallingSum;
    }

    public int findMinFallingPathSum(int[][] matrix, int row, int col, Integer[][] memo) {
        //base cases
        if (col < 0 || col == matrix.length) {
            return Integer.MAX_VALUE;
        }
        //check if we have reached the last row
        if (row == matrix.length - 1) {
            return matrix[row][col];
        }
        //check if the results are calculated before
        if (memo[row][col] != null) {
            return memo[row][col];
        }

        // calculate the minimum falling path sum starting from each possible next step
        int left = findMinFallingPathSum(matrix, row + 1, col, memo);
        int middle = findMinFallingPathSum(matrix, row + 1, col + 1, memo);
        int right = findMinFallingPathSum(matrix, row + 1, col - 1, memo);

        memo[row][col] = Math.min(left, Math.min(middle, right)) + matrix[row][col];
        return memo[row][col];
    }
}

// In the above recursion tree, we can identify the repetitive sub-paths (circled in the same color). For example, findMinPathSum(1, 0) is calculated twice, findMinPathSum(1, 1) is calculated three times, and so on.

// Repeated calculation of the same subproblems is the root cause of the exponential time complexity in the previous approach. Although, what if our algorithm could remember the result for a subproblem when it is computed the first time and reuses the stored result every other time?

// Pretend you are on a treasure hunt. On reaching point A, you travel to the destination and don't find anything there. You go back to some other path which again takes you to point A. You wouldn't explore the same path from point A again. You would say, "I have been here before; I know where this path goes."

// How can we make our algorithm think the same way? We can do so by marking every path we have visited so that if we reach the same path again, we know the result!!

// In Dynamic Programming, when a recursive problem solves the same subproblem multiple times, it has the Overlapping Subproblem property. Such problems can be optimized using a dynamic programming technique called Memoization.

// As in the previous approach, each call to findMinFallingPathSum will return the minimum falling path sum between the current cell and the bottom of the matrix. However, in this approach, we will store the result of each call in the new parameter memo, and when we revisit this cell in a subsequent call, we will be able to reuse the stored result.

// Algorithm

// In order to record the results of computation for every cell, maintain a 2-dimensional matrix named memo where the value of memo[row][col] would give the minimum falling path starting from the cell (row, col).

// Implement a Depth First Search algorithm, by defining a recursive function, findMinFallingPathSum(row, col), that recursively explores all the paths from the current cell (defined by parameters row and col).

// Define Base Case: In any recursive function, we must define the terminating condition i.e the base case. When the terminating condition is satisfied, we will exit the recursive search process. The base cases are as follows,
// The row or col values are not within the matrix boundaries.
// We have reached the last row. In this case, we will return the value of the current cell and not make any other recursive calls.
// Recursively explore all paths: If the base case is not satisfied, it means that we have not reached the end of our current path, and we must try all options to extend our path and find the one with the minimum sum:
// minimumPath = Minimum(findMinFallingPathSum(row + 1, col + 1),
//                       findMinFallingPathSum(row + 1, col),
//                       findMinFallingPathSum(row + 1, col - 1))
// To avoid repetitive computation of the results as in the brute force approach, we make use of stored results as follows,

// Before recursively computing the result for the current cell, check if the memo has the result for the current cell. If so, return the result, otherwise, proceed with the recursive call to compute the result.

// After computing the result, store the result in the memo[row][col].

// Iteratively find the minimum falling path for all possible starting cells i.e cells in 
// 0
// �
// ℎ
// 0 
// th
//   row and columns ranging from 
// 0
// 0 to 
// matrix.length
// −
// 1
// matrix.length−1. Track the minimum value in the variable minFallingSum and return the result.