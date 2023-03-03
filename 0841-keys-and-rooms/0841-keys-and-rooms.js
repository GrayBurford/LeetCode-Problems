/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {    
    let seen = new Set([0]);
    
    // EX: rooms = [[1],[2],[3],[]]
    function dfs(node) {
        for (const neighbor of rooms[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                dfs(neighbor);
            }
        }
    }
    
    dfs(0);
    
    return rooms.length > seen.size ? false : true;
    
};
// rooms[i] is the set of keys that you get from visiting room i. room[0] is room/node 0, which will give you an array of keys to other rooms
// rooms[i] is an array of other rooms we can visit from the current room, which makes this graph given as an adjacency list
// Start at room 0, need to visit every room.
// At every node i, the neighbors are rooms[i] -> [...]
// Start a dfs at node/room 0 and visit every node, then true. If we can't visit all nodes, then false.
// Check by adding visited nodes to set seen. If size of seen never reaches length of input (num rooms), then we know we didn't visit every room (some keys couldn't be reached)

// iterative approach:
// function canVisitAllRooms (rooms) {
//     let stack = [0];
//     let seen = new Set([0]);
    
//     while (stack.length) {
//         let node = stack.pop();
//         for (const neighbor of (rooms[node])) {
//             if (!seen(neighbor)) {
//                 seen.add(neighbor);
//                 stack.push(neighbor);
//             }
//         }
//     }
    
//     return rooms.length > seen.size ? false : true;
// }
