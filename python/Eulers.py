n = 100

n3 = (n - 1) // 3
n5 = (n - 1) // 5
n15 = (n - 1) // 15

totalSum3 = long((3 * n3 + 3 * n3 * n3))  / 2 # sum of numbers divisible by 3
totalSum5 = long((5 * n5 + 5 * n5 * n5))  / 2 # sum of numbers divisible by 5

totalSum15 = 0
if n > 15:
    totalSum15 = (15 * n15 + 15 * n15 * n15) / 2 # sum of the number divisible by both 3 and 5

sum = long(totalSum3 + totalSum5 - totalSum15)

print(sum)
