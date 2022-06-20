def insertionSort(arr):
    for i in range(1, len(arr) - 1):
        j = i - 1
        k = arr[i]
        while(j >= 0 and arr[j] > k):
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j+1] = k
    print(arr)

arr = [3,2,23,4,5,5,61,3,45]
insertionSort(arr)       

