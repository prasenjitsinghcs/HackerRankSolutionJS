public class CountWaysStairs {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            int count = countWaysRec(i);
            System.out.printf("M1. Stairs = %d, No of Ways = %d | ", i, count);

            int count2 = countWaysIterative(i);
            System.out.printf("M2. Stairs = %d, No of Ways = %d\n", i, count2);
        }
    }

    static int countWaysRec(int n) {
        if (n <= 1) {
            return 1;
        }
        return countWaysRec(n - 1) + countWaysRec(n - 2);
    }

    static int countWaysIterative(int n) {
        int a = 1;
        int b = 1;
        int next = a + b;
        if (n <= 1) {
            return n;
        }
        for (int i = 1; i <= n; i++) {
            next = a + b;
            a = b;
            b = next;
        }
        return a;
    }
}
