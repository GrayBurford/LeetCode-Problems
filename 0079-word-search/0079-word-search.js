/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function valid (row, col) {
        return 0 <= row && row < m && 0 <= col && col < n;
    }
    
    
    function backtrack (row, col, i, seen) {
        if (i === word.length) return true;
        
        for (const [dx, dy] of directions) {
            let nextRow = row + dy;
            let nextCol = col + dx;
            
            if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                if(board[nextRow][nextCol] === word[i]) {
                    seen[nextRow][nextCol] = true;
                    if (backtrack(nextRow, nextCol, i+1, seen)) {
                        return true;
                    }
                    seen[nextRow][nextCol] = false;
                }
            }
        }
        
        return false;
    }
    
    
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let m = board.length;
    let n = board[0].length;
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            let seen = [];
            for (let i = 0; i < m; i++) {
                seen.push(new Array(n).fill(false));
            }
            
            seen[row][col] = true;
            if (board[row][col] === word[0] && backtrack(row, col, 1, seen)) {
                return true;
            }
        }
    }
    
    return false;
    
};

// The input should look familiar - it is a graph where each square is a node and there are edges between adjacent squares. The reason this problem is backtracking and not just DFS is because we may visit a square multiple times on the same initial function call. While we aren't allowed to use a square more than once for the answer, there are multiple ways to use a square to form different candidates. For example, if we are starting at (0, 0), then going right and then down is a different path than going down and then right.

// We should still use a set seen like we did with DFS to avoid using the same letter in the same path, but unlike in DFS, we will remove from this set when backtracking. We should only traverse an edge if we know that the path could lead us to an answer - therefore, we can also pass an index variable i that indicates we are currently looking for word[i], and then only move to (nextRow, nextCol) if it is the correct letter. Because the answer could start from any square, we need to start backtracking from all squares that have word[0].

// To summarize: we use a DFS-esque algorithm to traverse paths, using a set to avoid using a square multiple times in the same path. We slowly try to build the word by only traversing to squares that have the next letter.

// As we have a graph, we can perform an algorithm similar to DFS to traverse the matrix. We choose a square that has the value word[0] and start there. Then we look for word[1] in the neighbors. If we find it, we move to it and look for word[2] and so on until we complete the word or reach a point where we can't continue building the word.

// When we realize we can't continue, we go back to the previous node (like we do in a normal DFS), but we should also remove the square we are leaving from the set we are using to avoid revisiting squares.

// The set prevents us from using a letter more than once in a given path, but once we start abandoning a path, we can remove it so that it may be used in a future path.