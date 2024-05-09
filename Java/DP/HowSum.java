package DP;

import java.util.ArrayList;
import java.util.HashMap;

public class HowSum {
    public static void main(String[] args) {
        int[] targets = { 4, 7, 8, 11, 40 };
        int nums[] = { 3, 5, 7 };
        for (int target : targets) {
            System.out.printf("%d = %s\n", target, howSum(nums, target));
        }
        System.out.println("Memoized Version:");
        for(int target: targets) {
        HashMap<Integer, ArrayList<Integer>> memo = new HashMap<>();
        System.out.printf("%d = %s\n", target, howSumv2(nums, target, memo));
        }
    }

    public static ArrayList<Integer> howSum(int[] nums, int target) {
        if (target == 0)
            return new ArrayList<>();
        if (target < 0)
            return null;

        for (int num : nums) {
            ArrayList<Integer> remSum = howSum(nums, target - num);
            if (remSum != null) {
                remSum.add(num);
                return remSum;
            }
        }
        return null;
    }

    /**
     * Memoized version of above howSum recursive function
     * @param nums
     * @param target
     * @return
     */
    public static ArrayList<Integer> howSumv2(int[] nums, int target, HashMap<Integer, ArrayList<Integer>> memo) {
        if (memo.containsKey(target)) return memo.get(target);
        if(target == 0) return new ArrayList<>();
        if(target < 0) return null;
        
        for(int num: nums) {
            ArrayList<Integer> remSum = howSumv2(nums, target - num, memo);
            if(remSum != null) {
                remSum.add(num);
                memo.put(target, remSum);
                return remSum;
            }
        }
        memo.put(target, null);
        return null;
    }
}
