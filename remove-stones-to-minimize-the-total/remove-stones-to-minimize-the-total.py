from heapq import *

class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        self.k = k
        self.piles = piles
        
        piles = [-num for num in piles]
        heapq.heapify(piles)
        
        for i in range(k):
            currmax = piles[0]
            heapq.heappop(piles)
            heapq.heappush(piles, floor(currmax / 2))
        
        return abs(sum(piles))
        
# instantiate variables, k, piles, and count
# turn piles list into a max heap, so max val is always index-0
# loop for <= k times to perform exactly k operations
# each loop we replace max value to reduce # of stones by highest amount possible
# maxheap says piles[0] is biggest num, then replace index-0 with floor(piles[0]/2): 5=>3; 10=>5
# after loop finishes, k operations have been performed
# sum the remaining list to find total: min # of stones remaining after k operations