import java.util.Arrays;

public class SortZeroOneTwo {
    public static void main(String[] args) {
        int[] arr = { 1, 0, 1, 0, 1, 2, 1, 2, 2, 0, 1 };
        arr = sort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static int[] sort(int[] arr) {
        int start = 0;
        int mid   = 0;
        int end   = arr.length - 1;

        while (mid <= end) {
            if (arr[mid] == 0) {
                swap(arr, start, mid);
                start++;
                mid++;
            } else if (arr[mid] == 1) {
                mid++;
            } else {
                swap(arr, mid, end);
                end--;
            }
        }
        return arr;
    }

    static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] =  arr[b];
        arr[b] = temp;
    }
}
