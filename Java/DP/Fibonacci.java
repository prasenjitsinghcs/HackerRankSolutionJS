package DP;

public class Fibonacci {
    public static void main(String[] args) {
        int [] nums = {1, 3, 6};
        System.out.println("Simple recursion:");
        for(int num: nums) {
            System.out.printf("fib(%d) = %d\n", num, fibonacciV1(num));
        }
        System.out.println("Memoized Version:");
        for(int num: nums) {
            int [] memo = new int[num];
            System.out.printf("fib(%d) = %d\n", num, fibonacciV2(num, memo));
        }

        System.out.println("Tabular Version:");
        for(int num: nums) {
            System.out.printf("fib(%d) = %d\n", num, fibonacciTab(num));
        }        
    }
    /**
     * Fibonacci using recursion
     * @param n
     * @return
     */
    public static int fibonacciV1(int n) {
        if (n <= 1) return n;
        return fibonacciV1(n - 1) + fibonacciV1(n - 2); 
    }
    /**
     * Memoized version of above recursion
     * @param n
     * @param memo
     * @return
     */
    public static int fibonacciV2(int n, int [] memo) {
        if (n <= 1) return n;
        if (memo[n - 1] != 0) return memo[n - 1];
        memo[n - 1] = fibonacciV2(n - 1, memo) + fibonacciV2(n - 2, memo); 
        return memo[n - 1];
    }

    /**
     * Tabular version of above recursion
     * @param n
     * @param memo
     * @return
     */
    public static int fibonacciTab(int n) {
        if (n <= 1) return n;
        int dp[] = new int[n + 1];
        dp[1] = 1;
        dp[2] = 1;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2]; 
        }
        return dp[n];
    }
}
