var maximizeSweetness = function(sweetness, K) {
    let left = 1;
    let right = sweetness.reduce((acc, curr) => acc + curr);
    
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        let sum = 0;
        let pieces = 0;
        
        for(let i = 0; i < sweetness.length; i++) {
            sum += sweetness[i];
            if (sum >= mid) {
                pieces++;
                sum = 0;
                if (pieces > K) break;
            }
        }
        
        if (pieces > K) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};