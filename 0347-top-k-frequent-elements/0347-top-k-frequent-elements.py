from heapq import *
from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = Counter(nums)
        minheap = []
        
        for key,val in hashmap.items():
            heapq.heappush(minheap, (val, key))
            
            if len(minheap) > k:
                heapq.heappop(minheap)
                
        return [pair[1] for pair in minheap]
            
# declare frequency hashmap and minheap
# loop over items in hashmap, and push pair onto minheap
# heap will sort by first item in a pair, so push (val, key), not (key, val), since we want heap to be sorted by frequency, not by the element
# Need element too, because this is how we will find the elements themselves to return an answer
# after pushing each pair, if the length of the minheap is greater than k, pop the first (min) frequency, since we only want the highest frequency items, and will always be k < n
# once every pair in hashmap is looped over, and subsequently lower frequency items removed from minheap, return list of just the elements in the remaining pairs of the minheap
        