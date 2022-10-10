# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Search an element in a sorted Array")
import math;

def searchElement(arr, x, start, end):
    if (start <= end):
        mid = start + math.floor((end - start) / 2)
        if (arr[mid] == x):
            return mid
        if (x <= arr[mid]):
            return searchElement(arr, x, start, mid)
        else:
            return searchElement(arr, x, mid + 1, end)
    return -1    

arr = [2,4,6,8,10,12,14,16,18,20]  
x = 16
print("arr = ", arr)
print("x = 16, Output = ", searchElement(arr, 16, 0, len(arr) - 1))  
print("x = 20, Output = ", searchElement(arr, 20, 0, len(arr) - 1))  
print("x = 2,  Output = ", searchElement(arr, 2, 0, len(arr) - 1))
print("x = 6,  Output = ", searchElement(arr, 6, 0, len(arr) - 1))    