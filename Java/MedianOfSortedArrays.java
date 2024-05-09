public class MedianOfSortedArrays {
    public static void main(String[] args) {
        int[] array1 = { 2, 3, 5, 8 };
        int[] array2 = { 10, 12, 14, 16, 18, 20 };
        int result = getMedian(array1, array2);

        System.out.println("Median: " + result);
        ;
    }

    static int getMedian(int[] array1, int[] array2) {
        int n = array1.length;
        int m = array2.length;

        int result[] = new int[n + m];

        int index = 0;
        int a = 0;
        int b = 0;

        while (a <= n - 1 && b <= m - 1) {
            if (array1[a] < array2[b]) {
                result[index] = array1[a];
                a++;
                index++;
                continue;
            }
            if (array1[a] > array2[b]) {
                result[index] = array2[b];
                b++;
                index++;
                continue;
            } else {
                result[index] = array1[a];
                a++;
                index++;
            }
        }

        while (a <= n - 1) {
            result[index] = array1[a];
            a++;
            index++;
        }

        while (b <= m - 1) {
            result[index] = array2[b];
            b++;
            index++;
        }

        for (int i : result) {
            System.out.println(i);
        }

        if (index % 2 == 0) {
            int i = (index / 2) - 1;
            return (result[i] + result[i + 1]) / 2;
        } else {
            int i = (index / 2);
            return result[i];
        }
    }
}
