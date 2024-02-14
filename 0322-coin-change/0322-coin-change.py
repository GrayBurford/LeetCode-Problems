from functools import lru_cache

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:

        @lru_cache(None)
        def dfs(rem):
            if rem < 0:
                return -1
            if rem == 0:
                return 0
            min_cost = float('inf')
            for coin in coins:
                res = dfs(rem - coin)
                if res != -1:
                    min_cost = min(min_cost, res + 1)
            return min_cost if min_cost != float('inf') else -1

        return dfs(amount)
    
    
# Approach 2 (Dynamic programming - Top down) [Accepted]
# Intuition
# Could we improve the exponential solution above? Definitely! The problem could be solved with polynomial time using Dynamic programming technique. First, let's define:

# F(S) - minimum number of coins needed to make change for amount S using coin denominations [c_0 ... C_n-1]

# We note that this problem has an optimal substructure property, which is the key piece in solving any Dynamic Programming problems. In other words, the optimal solution can be constructed from optimal solutions of its subproblems. How to split the problem into subproblems? Let's assume that we know F(S) where some change val1, val2, ... for S which is optimal and the last coin's denomination is C. Then the following equation should be true because of optimal substructure of the problem: F(S) = F(S-C) + 1.

# But we don't know which is the denomination of the last coin C. We compute F(S-C_i) for each possible denomination C_0, C_1, C_2 ... C_n-1 and choose the minimum among them.
    
# The idea of the algorithm is to build the solution of the problem from top to bottom. It applies the idea described above. It use backtracking and cut the partial solutions in the recursive tree, which doesn't lead to a viable solution. Тhis happens when we try to make a change of a coin with a value greater than the amount S. To improve time complexity we should store the solutions of the already calculated subproblems in a table.