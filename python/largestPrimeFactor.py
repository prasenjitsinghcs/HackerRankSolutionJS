# # 2 # Solution 1:
import math

def isPrime(n): # Finds whether n is prime or not.
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0: return False
    return True

def maxPrimeFactor(n):
    max = 1
    for i in range(1, int(math.sqrt(n))+1):
        if n%i == 0:
            if isPrime(n//i) and n//i > max:
                max = n//i
                break
            elif isPrime(i): max = i        
    return max
print(maxPrimeFactor(int(input()))) # 600851475143 or another number entry
# returns 6857 if the number 600851475143 is entered


# ---------------------------------------------------------


""" # 1 # Pseudo Solution
def isPrime(n):
    for i in range(2, (n//2)+1):
        if n % i == 0: return False
    return True
def primeMax(num):
    if isPrime(num): return num
    for i in range(((num // 2) + 1), 1, -1):
        if num%i == 0:
            if isPrime(i): return i
print(primeMax(int(input())))
"""