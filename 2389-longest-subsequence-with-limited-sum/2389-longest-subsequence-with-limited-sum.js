/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let ans = [];
    nums.sort((a,b) => a-b);
    console.log(`Sorted nums: ${nums}`);
    
    for (let i = 0; i < queries.length; i++) {
        let currSum = 0;
        let currTarget = queries[i];
        
        for (let j = 0; j < nums.length; j++) {
            if (j === nums.length - 1 && currSum + nums[j] <= currTarget) {
                ans.push(nums.length);
                break
            }
            if (currSum + nums[j] > currTarget) {
                ans.push(j);
                break
            }            
            currSum += nums[j]            
        }
    }
    
    return ans;
};

// sort nums array in ascending order, so that we have all of the smallest nums together
// since we want the max size subsequence that meets a target sum for each query, we always need the smallest num to maximize the size of elements adding to that sum
// instantiate answer variable array to push query answers onto
// loop over queries array and note target sum for each index
// variable for current query sum to += nums onto
// inner loop here over sorted nums, adding each num to querysum, checking against curr query sum
// if < sum, check += next num. If it doesn't break constraints, continue. if it does, push current j index onto answer
// once loop matrix ends, return answer