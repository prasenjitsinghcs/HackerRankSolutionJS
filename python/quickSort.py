def partition(arr, low, high):
    pivot = high - 1
    while(low <= high):
        if (arr[pivot] < arr[low]):
            temp = arr[low];
            arr[low] = arr[pivot]
            arr[pivot] = temp
            pivot = low
            low = low + 1
        elif (arr[pivot] > arr[high]):
            temp = arr[high]
            arr[high] = arr[pivot]
            arr[pivot] = temp
            pivot = high
            high = high - 1
    return low

def quickSort(arr, low, high):
    if (low < high):
        p = partition(arr, low, high)
        quickSort(arr, low, p - 1)
        quickSort(arr, p, high)
    print(arr)
    return arr

arr = [6, 3, 0, 1, 0, 4, 4, 7, 8, 3]
quickSort(arr, 0, len(arr) - 1)
