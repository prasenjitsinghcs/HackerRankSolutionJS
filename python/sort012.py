def sort012(arr):
    low = 0
    mid = 0
    high = len(arr) - 1

    print(high)

    while (mid <= high):
        if (arr[mid] == 0):
            print('arr[mid] === 0')
            swap(arr, low, mid)
            mid = mid + 1
            low = low + 1
        elif (arr[mid] == 1):
            print('arr[mid] === 1')
            mid = mid + 1
        else:
            print('else')
            swap(arr, mid, high)
            high = high - 1 

    return arr;    
    

def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp


a = [0,1,2,0,1,2,0,1,0,1,0,1]

print(sort012(a))