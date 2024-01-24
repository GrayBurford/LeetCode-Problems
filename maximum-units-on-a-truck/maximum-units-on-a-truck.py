from heapq import *

class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        maxheap = []
        maxunits = 0        
        
        # populate maxheap with all boxTypes and their quanity of units
        for i in range(len(boxTypes)):
            heapq.heappush(maxheap, [-boxTypes[i][1], boxTypes[i][0]])
            
        # only need to run loop for as many boxes as truck can hold
        for i in range(truckSize):
            # take largest unit quanity box every time
            if len(maxheap) > 0:
                curr = heapq.heappop(maxheap)

                for i in range(curr[1]):
                    if (truckSize > 0):
                        truckSize = truckSize -1
                        maxunits -= curr[0]

        return maxunits


# EX; boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
# EX: [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
# ---> [[-3, 1], [-2, 2], [-1, 3]]
# need to sort and access boxes by most units per box, since truck is only limited by number of boxes, not size of boxes
# create max heap that stores array of units first, then num boxes
# pop array off max heap, -= numboxes from trucksize, and increment units by how many boxes we can fit * how many units per box
# after truckSize = 0, must return answer