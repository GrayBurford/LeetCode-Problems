class Solution:
    def halveArray(self, nums: List[int]) -> int:
        listsum = sum(nums)
        target = listsum / 2
        answer = 0
        
        maxheap = [-num for num in nums]
        heapq.heapify(maxheap)
        
        while target > 0:
            largestnum = heapq.heappop(maxheap)
            target += largestnum / 2
            heapq.heappush(maxheap, largestnum / 2)
            answer = answer + 1
        
        return answer
    
    
# initialize sum of list, target (half of list sum), and answer variable
# initialize max heap from list. With python (min heap), must convert vals to negative for max heap
# start while loop for target > 0, so we only remove values until half the list is decremented
# pop largest num. Half this num and subtract from target. Push this halved num back onto heap (pop 42, add 21 back)
# increment answer (num of operations)
# once while loop exits, we have decremented list past half of the total sum and can return answer (min num of operations to half a list)