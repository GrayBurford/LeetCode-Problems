class Solution:
    def totalNQueens(self, n):
        def backtrack(row, diagonals, anti_diagonals, cols):
            # Base case - N queens have been placed
            if row == n:
                return 1

            solutions = 0
            for col in range(n):
                curr_diagonal = row - col
                curr_anti_diagonal = row + col
                # If the queen is not placeable
                if (col in cols 
                      or curr_diagonal in diagonals 
                      or curr_anti_diagonal in anti_diagonals):
                    continue

                # "Add" the queen to the board
                cols.add(col)
                diagonals.add(curr_diagonal)
                anti_diagonals.add(curr_anti_diagonal)

                # Move on to the next row with the updated board state
                solutions += backtrack(row + 1, diagonals, anti_diagonals, cols)

                # "Remove" the queen from the board since we have already
                # explored all valid paths using the above function call
                cols.remove(col)
                diagonals.remove(curr_diagonal)
                anti_diagonals.remove(curr_anti_diagonal)

            return solutions

        return backtrack(0, set(), set(), set())
    

# One way to solve this problem would be to pass an n * n matrix as an argument to the backtrack function (literally store the chessboard). However, this is not necessary and is very inefficient.

# We should try to use as little as we need to represent a chessboard. In this problem, we are only concerned about queens attacking each other. When we try to place a queen, we should place it on a square that isn't attacked in our current state. Because a queen attacks the row, column, and diagonals it occupies, we can simply use an argument for each one.

# As mentioned above, we use a neat trick with the diagonals so that we can use a set to efficiently find if a diagonal is already attacked. We also only need to use an integer for the current row, and then we just place one queen per row.

# Once we know how to represent a board, we just use the normal backtracking template. For each row, try placing a queen on every column if the square is not attacked. "Place" a queen by updating the state variables to represent which column/diagonals the newly placed queen attacks. When backtracking, "remove" the queen from the board by undoing the updates you made when placing the queen.

# We know we have a valid solution when row = n (we have placed n queens).