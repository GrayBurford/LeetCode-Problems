from heapq import *

class Solution:
    def maxNumberOfApples(self, weight: List[int]) -> int:
        minheap = []
        ans = 0
        basket = 5000
        
        for i in range(len(weight)):
            heapq.heappush(minheap, weight[i])
        
        for i in range(len(minheap)):
            curr = heapq.heappop(minheap)
            if basket - curr >= 0:
                basket -= curr
                ans += 1
            else:
                return ans
            
        return ans
        
# convert list to min heap
# loop through min heap, checking if weight is less than current available weight left in basket
# if there is sufficient weight, increment answer and -= basket weight
# when next apple's weight is insufficient for the basket, return answer
# min heap allows us to