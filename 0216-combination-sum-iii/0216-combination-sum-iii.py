class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        results = []
        
        def backtrack(remain, comb, next_start):
            if remain == 0 and len(comb) == k:
                # make a copy of current combination
                # Otherwise the combination would be reverted in other branch of backtracking.
                results.append(list(comb))
                return
            
            elif remain < 0 or len(comb) == k:
                # exceed the scope, no need to explore further.
                return

            # Iterate through the reduced list of candidates.
            for i in range(next_start, 9):
                comb.append(i + 1)
                backtrack(remain - i - 1, comb, i + 1)
                # backtrack the current choice
                comb.pop()

        backtrack(n, [], 0)

        return results
    
    
# Approach 1: Backtracking
# Intuition

# The problem asks us to come up with some fixed-length combinations that meet certain conditions.

# To solve the problem, it would be beneficial to build a combination by hand.

# If we represent the combination as an array, we then could fill the array one element at a time.

# For example, given the input k=3 and n=9, i.e. the size of the combination is 3, and the sum of the digits in the combination should be 9. Here are a few steps that we could do:

# 1). We could pick a digit for the first element in the combination. Initially, the list of candidates is [1, 2, 3, 4, 5, 6, 7, 8. 9] for any element in the combination, as stated in the problem. Let us pick 1 as the first element. The current combination is [1].

# 2). Now that we picked the first element, we have two more elements to fill in the final combination. Before we proceed, let us review the conditions that we should fullfil for the next steps.

# Since we've already picked the digit 1, we should exclude the digit from the original candidate list for the remaining elements, in order to ensure that the combination does not contain any duplicate digits, as required in the problem.

# In addition, the sum of the remaining two elements should be 9−1=8.

# 3). Based on the above conditions, for the second element, we could have several choices. Let us pick the digit 2, which is not a duplicate of the first element, plus it does not exceed the desired sum (i.e. 8) neither. The combination now becomes [1, 2].

# 4). Now for the third element, with all the constraints, it leaves us no choice but to pick the digit 6 as the final element in the combination of [1, 2, 6].

# 5). As we mentioned before, for the second element, we could have several choices. For instance, we could have picked the digit 3, instead of the digit 2. Eventually, it could lead us to another solution as [1, 3, 5].

# 6). As one can see, for each element in the combination, we could revisit our choices, and try out other possibilities to see if it leads to a valid solution.

# If you have followed the above steps, it should become evident that backtracking would be the technique that we could use to come up an algorithm for this problem.

# Indeed, we could resort to backtracking, where we try to fill the combination one element at a step. Each choice we make at certain step might lead us to a final solution. If not, we simply revisit the choice and try out other choices, i.e. backtrack.

# Algorithm

# There are many ways to implement a backtracking algorithm. One could also refer to our Explore card where we give some examples of backtracking algorithms.

# To implement the algorithm, one could literally follow the steps in the Intuition section. However, we would like to highlight a key trick that we employed, in order to ensure the non-redundancy among the digits within a single combination, as well as the non-redundancy among the combinations.

# The trick is that we pick the candidates in order. We treat the candidate digits as a list with order, i.e. [1, 2, 3, 4, 5, 6, 7, 8. 9]. At any given step, once we pick a digit, e.g. 6, we will not consider any digits before the chosen digit for the following steps, e.g. the candidates are reduced down to [7, 8, 9].

# With the above strategy, we could ensure that a digit will never be picked twice for the same combination. Also, all the combinations that we come up with would be unique.