class Test {
    public static void main(String[] args) {
        int[] arr = { 38, 43, -47, 27, -29, 1, -41, 31, -43, -39 }; // 6580
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            int subMax = Integer.MIN_VALUE;
            for (int j = i; j < arr.length; j++) {
                sum = sum + arr[j];
                if (arr[j] > subMax) {
                    subMax = arr[j];
                }
                if (sum * subMax > max) {
                    max = sum * subMax;
                }
            }
        }

        System.out.println("output -> " + max);
    }
}