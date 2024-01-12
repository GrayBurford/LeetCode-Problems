/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    const n = board.length;

    board.reverse();
    function getCoordinates(square) {
        const sq = square - 1;
        const r = Math.floor(sq / n);
        let c = (sq % n);
        if (r % 2) {
            c = n - (sq % n) - 1;
        }
        return [r, c];
    }

    function bfs() {
        const queue = [[1, 0]];
        const visit = new Set();
        const target = (n ** 2);
        while (queue.length > 0) {
            const [square, moves] = queue.shift();

            for (let i = 1; i < 7; i++) {
                let nextSquare = square + i;
                const [r, c] = getCoordinates(nextSquare);
                if (board[r][c] !== -1) {
                    nextSquare = board[r][c];
                }
                if (nextSquare === target) return moves + 1;
                if (!visit.has(nextSquare)) {
                    visit.add(nextSquare);
                    queue.push([nextSquare, moves + 1]);
                }
            }
        }
        return -1;
    }
    return bfs();
};