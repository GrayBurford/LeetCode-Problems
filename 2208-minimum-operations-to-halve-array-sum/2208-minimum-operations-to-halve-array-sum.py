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