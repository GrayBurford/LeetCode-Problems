from heapq import *

class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        self.sticks = sticks
        heapq.heapify(sticks)
        totalcost = 0
        
        while len(sticks) > 1:
            a = heapq.heappop(sticks)
            b = heapq.heappop(sticks)
            
            totalcost += a+b
            heapq.heappush(sticks, a+b)
            
        return totalcost
        
        
        
# Must keep connecting 2 sticks at a time until there is only one large stick
# cost to connect sticks is x + y, so the smaller the stick, the cheaper it is to connect
# need to continuously find the smallest 2 sticks to connect => MINHEAP
# min heapify the list and instantiate cost variable
# perform operations while len(sticks) > 1
# each operation, remove 1st and 2nd smallest values from list.
# sum those 2 numbers and add that value back to the list, and add that value to cost variable
# after while loop ends (only 1 stick left), return cost variable