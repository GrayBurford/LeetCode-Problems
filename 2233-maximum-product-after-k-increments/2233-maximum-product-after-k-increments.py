# class Solution:
#     def maximumProduct(self, nums: List[int], k: int) -> int:
#         heapq.heapify(nums)
            
#         for _ in range(k):
#             heapq.heappush(nums, heapq.heappop(nums) + 1)
        
#         MOD = 1_000_000_007
#         ans = 1
#         for x in nums:
#             ans *= x
        
#         return ans % MOD
    
# While this program technically gives a correct answer, it will run into Time Limit Exceeded or even produce a wrong answer depending on the language you use as the product gets too large for even a long or long long to handle. If we instead take the modulus at every operation, then it will pass as accepted:

class Solution:
    def maximumProduct(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
            
        for _ in range(k):
            heapq.heappush(nums, heapq.heappop(nums) + 1)
        
        MOD = 1_000_000_007
        ans = 1
        for x in nums:
            ans = (ans * x) % MOD
        
        return ans
                
# The optimal way to perform the increments is to greedily increment the smallest element at every operation. The mathematical explanation is as follows:

# You have x > y
# If you increment x, then (x + 1) * y = xy + y
# If you increment y, then x * (y + 1) = xy + x
# The second product is larger since x > y
# We know how to continuously find the smallest element - with a heap. Convert nums into a min heap, pop from it, add 1 to the result, then push it back. Do this k times, and at the end, multiply all the numbers together and return the answer.