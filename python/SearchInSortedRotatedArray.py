# Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.
# Note: Find the element in O(logN) time and assume that all the elements are distinct.
# Example:  
# Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
# Output : Found at index 8

print("Search an element in a sorted and rotated Array")

def searchElement(arr, x, start, end):
    if (start <= end):
        mid = start + ((end - start) // 2)
        print("mid -> ", str(mid))
        if (arr[mid] == x):
            return mid
        if (arr[start] < arr[mid]):
            if (x >= arr[start] and x < arr[mid]):
                return searchElement(arr, x, start, mid - 1)
            else:
                return searchElement(arr, x, mid + 1, end)
        else:
            if (x >= arr[mid + 1] and x <= arr[end]):
                return searchElement(arr, x, mid + 1, end)
            else:
                return searchElement(arr, x, start, mid - 1)
    return -1

arr = [5,6,7,8,9,0,2,3,4]  

print("arr = ", arr)
print("x = 5, Output = ", searchElement(arr, 5, 0, len(arr) - 1))  
print("x = 1, Output = ", searchElement(arr, 1, 0, len(arr) - 1))  
print("x = 7,  Output = ", searchElement(arr, 7, 0, len(arr) - 1))
print("x = 3,  Output = ", searchElement(arr, 3, 0, len(arr) - 1))  
print("x = 10,  Output = ", searchElement(arr, 10, 0, len(arr) - 1))    

# Time Compexity: O(log(n))
# Space Compexity: O(1)