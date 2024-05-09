// 1 1 2 3 5 8
class FibonacciNumbers {
    public static void main(String[] args) {
        int memo[] = new int[100];
        int nums[] = { 4,12,20,28,36,44,48 };

        System.out.println("Using normal recursion");
        
        for (int num: nums) {
            System.out.println("fibonacci("+num+") => " + fibonacci(num));
        }

        System.out.println("Using memoized version with recursion");

        for (int num: nums) {
            System.out.println("fibonacciMemo("+num+") => " + fibonacciMemo(num, memo));
        }
    }

    public static int fibonacci(int n) {
        if (n <= 1)
            return n;
        else
            return fibonacci(n - 1) + fibonacci(n - 2);
    }

    /**
     * Fibonacci Memoized Version
     * @param n
     * @param memo
     * @return
     */
    public static int fibonacciMemo(int n, int[] memo) {
        if (memo[n] != 0) {
            return memo[n];
        }
        if (n <= 1)
            return n;
        else {
            memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
            return memo[n];
        }
    }
}
