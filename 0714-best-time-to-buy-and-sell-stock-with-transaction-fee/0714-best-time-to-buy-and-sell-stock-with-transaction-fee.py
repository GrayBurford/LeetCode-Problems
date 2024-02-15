class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)
        hold, free = [0] * n, [0] * n
        
        # In order to hold a stock on day 0, we have no other choice but to buy it for prices[0].
        hold[0] = -prices[0]
        
        for i in range(1, n):
            hold[i] = max(hold[i - 1], free[i - 1] - prices[i])
            free[i] = max(free[i - 1], hold[i - 1] + prices[i] - fee)
        
        return free[-1]

        
# Consider the first K stock prices. At the end, the only legal states are that you don't own a share of stock, or that you do. Calculate the most profit you could have under each of these two cases.

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/