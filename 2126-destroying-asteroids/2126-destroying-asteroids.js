/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b) => a-b);
    
    for (const asteroid of asteroids) {
        if (mass < asteroid) {
            return false;
        }
        
        mass += asteroid;
    }
    
    return true;
};

// greedy algorithm
// sort asteroids smallest to greatest
// if smallest asteroid is always smaller than current mass, will always be able to destroy it
// so after sort, if we get to an asteroid that is larger than current mass, it will always be too big
// loop over all sorted asteroids, checking size. If too big, false. If not, += mass and continue
// after loop ends, all asteroids are combined with planet: return true