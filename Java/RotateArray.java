public class RotateArray {
    public static void main(String[] args) {
        int arr[] = { 6, 3, 0, 1, 0, 4, 4, 7, 8, 0 };
        int k = 2;
        int low = 0, high = arr.length - 1;
        reverse(arr, low, high);
        reverse(arr, low, k - 1);
        reverse(arr, k, high);

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void reverse(int[] arr, int low, int high) {
        while (low < high) {
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low++;
            high--;
        }
    }
}
