def selectionSort(arr):
    for i in range(0, len(arr)):
        j = i
        min = arr[j]
        while(j < len(arr)):
            if (arr[j] < min):
                min = arr[j]
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            j = j + 1
    print(arr)

arr = [9, 8, 7, 0, 6, 3, 4, 4, 6, 5]

selectionSort(arr)
