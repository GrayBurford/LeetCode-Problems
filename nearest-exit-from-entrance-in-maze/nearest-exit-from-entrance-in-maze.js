// /**
//  * @param {character[][]} maze
//  * @param {number[]} entrance
//  * @return {number}
//  */
// var nearestExit = function(maze, entrance) {
//     let steps = 0;
//     let seen = [];
//     let queue = [[entrance[0], entrance[1], 0]];
//     const m = maze.length;
//     const n = maze[0].length;
//     const directions = [[1,0], [0,1], [-1,0], [0,-1]];
    
//     function isValidSquare(row, col) {
//         return 0 <= row && row < m && 0 <= col && col < n;
//     }
    
//     // fill seen variable with false values for entire maze matrix
//     for (let i = 0; i < m; i++) {
//         seen[i] = new Array(n).fill(false);
//     }
//     seen[entrance[0]][entrance[1]] = true;
    
//     // nested loop over maze matrix to find walls, and mark them as "seen" since we can't visit them
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (maze[i][j] === "+") {
//                 seen[i][j] === true;
//             }
//         }
//     }
    
//     while (queue.length) {
//         let currLen = queue.length;
//         let nextQueue = [];
        
//         for (let i = 0; i < currLen; i++) {
//             let [row, col] = queue[i];
            
//             if (row === 0 || row === m-1 || col === 0 || col === n-1 
//                 && !(row === entrance[0] && col === entrance[1])) {
//                 return steps;
//             }
        
//             for (let [dx, dy] of directions) {
//                 let nextRow = row + dy;
//                 let nextCol = row + dx;

//                 if (isValidSquare(nextRow, nextCol) && !seen[nextRow][nextCol]) {
//                     nextQueue.push([nextRow, nextCol]);
//                     seen[nextRow][nextCol] = true;
//                 }
//             }
//         }
//         steps++;       
//         queue = nextQueue;
        
//     }
    
//     return -1;
// };

// Declare variables for answer steps, matrix lengths, seen array, queue array (for BFS), and 4-cardinal directions
// start seen array with entrance coordinates
// Write helper function to check if a direction is in bounds/valid
// loop over maze matrix and add +s to seen variable



// from rohitsingh79 Leetcode:

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
 var nearestExit = function(maze, entrance) {
    
    // number of rows
    let n = maze.length;

    // number of columns
    let m = maze[0].length;

    // declare a queue

    let q = [];

    // declare the 4 cordinates

    // top , right , down , left

    let dx = [-1, 0, 1, 0];

    let dy = [0 , 1 , 0, -1]

    // mark the visited cell in the maze

    maze[entrance[0]][entrance[1]] = '+';

    // level to hold track of the level in bfs

    let level = 0;

    //push the entrance into the queue

    q.push([entrance[0] , entrance[1]]);

    // run a loop till the q is empty

    while(q.length!==0){

        // take the current size of the queue for bfs

        let len = q.length;

        while(len--){

            // pop from the front of the queue

            let first = q.shift();

            let [i , j] = first;

            // we will check if we have reached the end of the queue

            if(!(i==entrance[0] && j==entrance[1]) && (i==0 || j==0 || i==n-1 || j==m-1)){
                return level;
            }


            // else push all the 4 cordinates of the cell in the queue

            // run a for loop

            for(let k=0;k<4;k++){

                let new_i = i+dx[k];

                let new_j = j+dy[k];

                // check if the new cordinates is not visited and is not a wall and is also not out of bound
                // and mark it as visited

                if(new_i>=0 && new_i<n && new_j>=0 && new_j<m && maze[new_i][new_j]!=='+' ){
                    q.push([new_i , new_j]);
                    // mark it as visted
                    maze[new_i][new_j] = '+';
                }
            }

        }

        level++;

    }

    return -1;
    

};
