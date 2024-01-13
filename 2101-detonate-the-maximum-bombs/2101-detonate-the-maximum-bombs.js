/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let map = {}, max = 0
    for(i = 0; i < bombs.length; i++){
        if(!map[i]) map[i] = []
        for(j = 0; j < bombs.length; j++){
            let [x,y,r] = bombs[i], h = bombs[j][0], k = bombs[j][1]
            if (Math.sqrt(Math.pow(x-h, 2) + Math.pow(y-k, 2)) <= r) map[i].push(j)
        }
    }
    const dfs = (point, visited = new Set()) => {
        let subMax = 0
        map[point].forEach((neighbor) => {
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                subMax++
                subMax += dfs(neighbor, visited)
            }   
        }) 
        return subMax      
    }
    for(i = 0; i < bombs.length; i++){
        max = Math.max(dfs(i), max)
        if(max == bombs.length) return max
    }
    return max
};