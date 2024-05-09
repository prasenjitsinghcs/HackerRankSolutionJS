package DP;

import java.util.HashMap;

public class CanSum {
    public static void main(String[] args) {
        int[] targets = { 4, 7, 8, 11, 1000};
        int nums[] = { 3, 5, 7 };
        for(int target: targets) {
            System.out.printf("%d = %s\n", target, canSum(nums, target));
        }
        System.out.println("Memoized Version:");
        for(int target: targets) {
            HashMap<Integer, Boolean> memo = new HashMap<>();
            System.out.printf("%d = %s\n", target, canSumv2(nums, target, memo));
        }

        System.out.println("Tabulization Version:");
        for(int target: targets) {
            System.out.printf("%d = %s\n", target, canSumv3(nums, target));
        }
    }

    /**
     * can we make number cobination to target sum
     * @param nums
     * @param target
     * @return
     */
    public static boolean canSum(int nums[], int target) {
        if (target == 0)
            return true;
        if (target < 0)
            return false;
        for (int num : nums) {
            if (canSum(nums, target - num) == true) {
                return true;
            }
        }
        return false;
    }

    /**
     * Memoized version of above canSum function
     * @param nums
     * @param target
     * @param memo
     * @return
     */
    public static boolean canSumv2(int nums[], int target, HashMap<Integer, Boolean> memo) {
        if(memo.containsKey(target)) return memo.get(target);
        if (target == 0)
            return true;
        if (target < 0)
            return false;
        for (int num: nums) {
            if (canSumv2(nums, target - num, memo) == true) {
                memo.put(target, true);
                return true;
            }
        }
        memo.put(target, false);
        return false;
    }

    /**
     * Iterative version of above canSum function
     * @param nums
     * @param target
     * @param memo
     * @return
     */
    public static boolean canSumv3(int nums[], int target) {
        
        if (target == 0)
            return true;
        if (target < 0)
            return false;

        boolean [] dp = new boolean[target + 1];
        dp[0] = true;

        for(int i = 0; i < target + 1; i++) {
            for (int num: nums) {
                if (i + num <= target) {
                    if (dp[i] == true) dp[i + num] = dp[i];
                }
            }
        }
        return dp[target];
    }
}
