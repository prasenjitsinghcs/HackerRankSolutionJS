class Factorial {
    public static void main(String[] args) {
        int n = 5;
        while(n > 0) {
            System.out.printf("Factorial of %d! = %d\n" , n, fact(n));
            n--;
        }
    }

    public static int fact(int n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
    }
}