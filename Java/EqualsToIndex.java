// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class EqualsToIndex {
    public static void main(String[] args) {
        int[] arr = { -11, -8, 5, 6, 7 };
        System.out.println("<----- Binary Search ----->\n");
        int bresult = binarySearch(arr, 0, arr.length - 1);
        System.out.println(bresult);
        System.out.println("<----- Linear Search ----->\n");
        int lresult = linearSearch(arr);
        System.out.println(lresult);
    }

    static int linearSearch(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == i) {
                return i;
            }
        }
        return -1;
    }

    static int binarySearch(int[] arr, int low, int high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == mid) {
            return mid;
        }
        if (low <= high) {
            if (arr[mid] > mid) {
                return binarySearch(arr, low, mid - 1);
            } else {
                return binarySearch(arr, mid + 1, high);
            }
        }
        return -1;
    }
}