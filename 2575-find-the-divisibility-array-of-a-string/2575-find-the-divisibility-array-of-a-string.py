class Solution:
    def divisibilityArray(self, word: str, m: int) -> List[int]:
        div = []
        curr = 0
        
        for digit in word:
            curr = (curr * 10 + int(digit)) % m
            if curr == 0:
                div.append(1)
            else:
                div.append(0)
        
        return div 
        
# The simplest way to solve this problem would be to just iterate over word and at each index i, convert the prefix string into an integer, then check if that integer is divisible by m using the modulo operator.

# However, the constraints give n <= 10^5. This is problematic as converting a string to an integer costs O(n), where n is the length of the string. This means that in string operations alone, we will spend 1+2+3+...+n, which as we know is 
# O(n^2) operations.

# A workaround is to start with an integer curr = 0, and then "append" digits one by one. When we "append" a digit, the magnitude increases by one, then the last digit becomes the appended digit. This translates to the formula curr = curr * 10 + digit. Now, we only need to convert strings of length 1.

# This is still insufficient. Because each digit increases the magnitude of the number, the final integer could be on the order of 10^10^5. This is absurdly large, and performing any operations on a number of this size will be very slow. You probably can't even store it in memory (long long in C++ can't even store 10^19, and we are talking about 10^100000.

# This is where modular arithmetic comes in. Because we are only concerned if each prefix is divisible by m, we can perform all operations mod m. Instead of curr = curr * 10 + digit, we can do curr = (curr * 10 + digit) % m.