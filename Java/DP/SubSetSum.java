package DP;

import java.util.ArrayList;

public class SubSetSum {
    public static void main(String[] args) {

        int[] set = { 1,5,7 };
        int sum = 8;
        int n = set.length;
        System.out.println(isSubsetSum(set, sum, n)); // true

        boolean memo[][] = new boolean[sum + 1][n + 1];
        System.out.println(isSubsetSumMemo(set, sum, n, memo));

        System.out.println(getSubSet(set, sum, n));

        System.out.println(getSubSetCount(set, sum, n));

        System.out.println(getSubSet(set, sum, n));

    }

    public static boolean isSubsetSum(int[] arr, int sum, int n) {

        // base case
        if (sum == 0)
            return true;
        if (n == 0)
            return false;

        // if current element is greater than remaining sum
        if (arr[n - 1] > sum)
            return isSubsetSum(arr, sum, n - 1);

        // check if sum exists, when including or excluding current element
        return isSubsetSum(arr, sum - arr[n - 1], n - 1) || isSubsetSum(arr, sum, n - 1);
    }

    public static boolean isSubsetSumMemo(int[] arr, int sum, int n, boolean[][] memo) {
        if (memo[sum][n] == true)
            return memo[sum][n];
        // base case
        if (sum == 0)
            return true;
        if (n == 0)
            return false;

        // if current element is greater than remaining sum
        if (arr[n - 1] > sum) {
            memo[sum][n] = isSubsetSumMemo(arr, sum, n - 1, memo);
            return memo[sum][n];
        }

        // check if sum exists, when including or excluding current element
        boolean inc = isSubsetSumMemo(arr, sum - arr[n - 1], n - 1, memo);
        boolean exc = isSubsetSumMemo(arr, sum, n - 1, memo);
        memo[sum][n] = inc || exc;
        return memo[sum][n];
    }

    public static boolean isSubsetSumTab(int[] arr, int sum) {
        // base case
        if (sum == 0)
            return true;

        int s = sum + 1;
        int n = arr.length + 1;

        boolean dp[][] = new boolean[s][n];

        for (int i = 0; i < s; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][0] = false;
                dp[0][j] = true;
            }
        }

        for (int i = 0; i < s; i++) {
            for (int j = n - 1; j > 0; j--) {
                if (arr[j - 1] > sum) {
                    dp[i][j] = dp[i][j - 1];
                } else {
                    boolean inc = dp[sum - arr[j - 1]][j - 1];
                    boolean exc = dp[i][j - 1];
                    dp[i][j] = inc || exc;
                }
            }
        }

        return dp[sum][arr.length];
    }

    public static ArrayList<Integer> getSubSet(int[] arr, int sum, int n) {

        // base case
        if (sum == 0)
            return new ArrayList<Integer>();
        if (n == 0)
            return null;

        // if current element is greater than remaining sum
        if (arr[n - 1] > sum)
            return getSubSet(arr, sum, n - 1);

        // check if sum exists, when including or excluding current element
        ArrayList<Integer> inc = getSubSet(arr, sum - arr[n - 1], n - 1);
        ArrayList<Integer> exc = getSubSet(arr, sum, n - 1);

        if (inc != null) {
            inc.add(arr[n - 1]);
            return inc;
        }
        return exc;
    }

    public static int getSubSetCount(int[] arr, int sum, int n) {

        // base case
        if (sum == 0)
            return 1;
        if (n == 0)
            return 0;

        // if current element is greater than remaining sum
        if (arr[n - 1] > sum)
            return getSubSetCount(arr, sum, n - 1);

        // check if sum exists, when including or excluding current element
        int inc = getSubSetCount(arr, sum - arr[n - 1], n - 1);
        int exc = getSubSetCount(arr, sum, n - 1);

        return inc + exc;
    }

   
    
}