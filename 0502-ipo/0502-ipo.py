from heapq import *

class Solution:
    def findMaximizedCapital(
        self, 
        k: int, 
        w: int, 
        profits: List[int], 
        capital: List[int]) -> int:
            
        n = len(profits)
        projects = sorted(zip(capital, profits))
        heap = []
        i = 0

        for _ in range(k):
            while i < n and projects[i][0] <= w:
                heapq.heappush(heap, -projects[i][1])
                i += 1

            if len(heap) == 0:
                # not enough money to do any more projects
                return w

            # minus because we stored negative numbers on the heap
            w -= heapq.heappop(heap)

        return w

# greedily choose the most profitable project that you can afford at each step. Use a heap to keep track of the most profitable project and add projects to the heap as you gain more capital.
# How do we determine which projects we can afford at any given moment
# of those projects, how do we find the most profitable one
# sort projects according to capital required to start them. Can easily iterate with iteration variable
# keeps track of which projects we can afford at any given time
# use max heap, so at any moment we know which is the most profitable project we can afford
# with max heap, need to make negative with python, since python only uses min heaps 