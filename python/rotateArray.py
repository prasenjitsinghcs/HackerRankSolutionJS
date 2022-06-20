
def reverseArray(arr, low, high):
    while (low < high):
        temp = arr[low]
        arr[low] = arr[high]
        arr[high] = temp
        low = low + 1
        high = high - 1

def rotateArray(arr, k):
    low = 0
    high = len(arr)
    reverseArray(arr, low, high - 1)
    reverseArray(arr, low, k -1)
    reverseArray(arr, k, high - 1)
    return arr

arr = [1,2,3,4,5,6,7]
out = rotateArray(arr, 1)
print(out)
