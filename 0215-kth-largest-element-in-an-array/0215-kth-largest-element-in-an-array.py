from heapq import *

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        minheap = []
        
        for num in nums:
            heapq.heappush(minheap, num)
            
            if len(minheap) > k:
                heapq.heappop(minheap)
            
        return minheap[0] 
        
        
# convert input nums array to minheap
# pop values until heap length equals k
# return heap[0] which will be the kth largest element