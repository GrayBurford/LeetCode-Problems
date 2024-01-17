from heapq import *

class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.minheap = nums
        heapq.heapify(self.minheap)

    def add(self, val: int) -> int:
        heapq.heappush(self.minheap, val)
        
        while len(self.minheap) > self.k:
            heapq.heappop(self.minheap)
        
        return self.minheap[0]
    
# instantiate minheap
# add function adds new val, then returns new kth largest element
# under conditions while length is greater than k, can remove values until they are equal. heap[0] will then be kth largest num
# if heap length is less than or equal to k, kth largest is simply first in the list on the heap (heap[0])