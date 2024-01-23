/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let ascendingSort = people.sort((a,b) => a-b)
    
    let heaviest = ascendingSort.length - 1;
    let lightest = 0;
    let numOfBoats = 0;
    
    while (lightest <= heaviest) {
        if (ascendingSort[lightest] + ascendingSort[heaviest] <= limit) {
            lightest++
        }
        
        heaviest -= 1;
        numOfBoats++;
    }
    
    return numOfBoats;
};

// minimize the number of boats, which meals maximize the number of boats carrying 2 people
// if heaviest + lightest > limit, then heaviest cannot pair with anyone and must use own boat
// so, for each heaviest person, try to greedily pair with the lightest
// if heaviest can pair with lightest, why choose anyone else to pair lightest person with?
// Each pair is weighted the same: reduces answer by 1
// Pairing heaviest person makes it easier to create more pairings in the future
// Use two pointers to keep track of lightest and heaviest person at any given time
// x + y <= limit. This implies that y could pair with anyone, since x is already the heaviest person. To maximize the efficiency of the boats, if we can pair y with anyone, we should pair them with the heaviest person, which is x. This makes the most of the boat and also makes it easier to make future pairings since we don't need to worry about x anymore.