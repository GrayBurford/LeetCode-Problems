from heapq import *

class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        maxheap = []
        
        for num in arr:
            distance = abs(x - num)
            heapq.heappush(maxheap, (-distance, -num))
            
            if len(maxheap) > k:
                heapq.heappop(maxheap)
                
        return sorted([-pair[1] for pair in maxheap])
        
# Need to find smallest differences, so use maxheap so pop greatest differences
# Declare max heap and push elements onto maxheap based on their difference from x
# Push tuples (distance, element) onto maxheap, and check when maxheap length > k, pop a value
# popped value will be largest distance tuple, so we always keep top 3 shortest distance tuples
# loop over nums in arr, calculate distance from target x with abs val and subtract
# push tuple to maxheap, but make distance negative because Python only uses minheap and need smallest to be popped now
# Problem states for tie breaks, we want the smaller number, so need to make num negative also
# check if heap is too big after each push, and if so, pop val (max val)
# after loop ends, maxheap will be holding the k answer elements, and problem needs sorted, so sort and revert to positive