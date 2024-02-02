/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let check = k => {
        let t = 0;
        for (const d of dist) {
            t = Math.ceil(t);
            t += d / k;
        }
        
        return t <= hour;
    }
    
    if (dist.length > Math.ceil(hour)) {
        return -1;
    }
    
    let left = 1;
    let right = Math.pow(10, 7);
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};


// This problem is fairly similar to Koko Eating Bananas. If we have a speed k, and a train has a distance d, then the train takes d / k time. The problem has an added constraint that trains only depart on integer hours - so we also need to round our time up before taking each train.

// The minimum possible speed is 1, and the maximum is 10^7 as given in the problem description. The fact that the problem is giving us this information is actually a hint towards using binary search, but it brings up a good question - what do you do when you cannot ascertain a maximum possible answer from what is given in the input? You can use an arbitrarily large number for right, like 10^10. Logarithms are so fast that it will hardly make a difference.

// The task can also just be impossible in general - the problem says we should return -1 if it is. When is it impossible? Because each train only departs on an integer, even if we have a ridiculously high speed, each train will take at least 1 hour. Therefore, if there are more trains than hours allowed, it is impossible.

// Note: in the check function, we don't take the ceiling of the final value because we don't need to wait for any more trains. The rounding up is to simulate waiting for the next train at the next integer hour.

