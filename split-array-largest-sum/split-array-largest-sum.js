var splitArray = function(nums, m) {
    let low = Math.max(...nums);
    let high = 0;
    let ans = 0;
    
    for(let num of nums) {
        high += num;
    }
    
    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2); // to prevent overflow
        
        if(isPossible(nums, mid, m)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};

function isPossible(arr, mid, noOfParts) {
    let part = 1;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if(sum > mid) {
            part++;
            sum = arr[i];
        }
    }
    return part <= noOfParts; 
}


// Explanation
// DO CHECK COMMENTS FOR IN DETAIL QUESTION EXPLANATION
// Question says split the array into "m" parts such that we can minimize the largest sum among these subarray
// for eg if we have nums = [4 , 5 , 1 , 7, 9, 3, 2, 8] as array and we want to split it into m = 3 parts so lets consider in how many ways we can split this array into 3 parts,
// 1st - part 1 = [4], part 2 = [5, 1, 7, 9], part 3 = [3, 2, 8], largest part is 5 + 1 + 7 + 9 = 21
// 2nd - part 1 = [4, 5], part 2 = [1, 7, 9, 3], part 3 = [2, 8], largest part is 1 + 7 + 9 + 3 = 20
// similary we can split this array into 3 parts as we wish but question says, we are splitting the array that is okay but we have a condition

// we want to split the array in such a way that the largest part we are getting should be minimum i.e in above two examples we got one largest part as 21 and in other 20, so there can be a way that we can split the array in such a way that largest part can be reduced.
// Approach
// Notice one thing, the largest part cannot be less than the maximum element of the array, why ? because no matter in how many pieces we want to split the array, 2 , 3 , 4 any number, but the maximum element from the array will lie in some part, so we can go as low as largest element of the array
// Notice the max we can do is put every element of the array into one part, I know that would be invalid but this gives a hint that at max we can go sum of all the elements of the array
// We got low, we got high, we can now apply binary search and see if we can achieve our result
// How
// Apply binary search, we will get our mid, if we can split the array into "m" parts such that largest sub-array sum will be smaller than mid, then this can be our possible answer, not the final answer but a possible answer
// If this answer is possible, then we can try a smaller number and again check if it is possible to split the array into "m" parts such that largest sub-array sum will be smaller than mid and how we do that ? by putting high = mid - 1, if that thing is not possible that means we won't be able to do that and we will require larger number so we will put low = mid + 1.