class MaxSumSubArray {
    public static void main(String[] args) {
        int [] array = {1,2,-9,3,4,-7,5,6};
        int max = getMaxSum(array);
        
        System.out.println("Max sum: " + max);
    }

    static int getMaxSum(int [] array) {
        if (array.length == 0) {
            return 0;
        }

        if (array.length == 1) {
            return array[0];
        }

        int currentSum = 0;
        int maxSum     = Integer.MIN_VALUE;

        for (int i = 0; i < array.length; i++) {
            currentSum = currentSum + array[i];
            maxSum = Math.max(maxSum, currentSum);

            if (currentSum < 0) {
                currentSum = 0;
            }
        }
        return maxSum;
    }
}