package DP;

import java.util.ArrayList;
import java.util.List;

public class BestSum {
    public static void main(String[] args) {
        int[] nums = { 7, 5, 3, 11 };
        int[] targets = { 4, 8, 17, 32 };

        System.out.println("Best combination for given target using recursion:");
        for (int target : targets) {
            List<Integer> output = bestSum(nums, target);
            System.out.printf("bestSum(%d) => %s\n", target, output);
        }

        System.out.println("Memoized version of recursion:");
        for (int target : targets) {
            ArrayList<Integer>[] memo = new ArrayList[target + 1];
            List<Integer> output = bestSumMemo(nums, target, memo);
            System.out.printf("bestSum(%d) => %s\n", target, output);
        }

        System.out.println("Memoized version of Chat GPT:");
        int target = 1000;
        List<Integer> output = bestSumChatGPT(nums, target);
        System.out.printf("bestSumChatGPT(%d) => %s\n", target, output);
    }

    public static List<Integer> bestSum(int[] nums, int target) {
        if (target == 0)
            return new ArrayList<Integer>();
        if (target < 0)
            return null;

        List<Integer> bestRemainderCombination = null;

        for (int num : nums) {
            int remainder = target - num;
            List<Integer> remainderSum = bestSum(nums, remainder);
            if (remainderSum != null) {
                remainderSum.add(num);
                if (bestRemainderCombination == null || bestRemainderCombination.size() > remainderSum.size()) {
                    bestRemainderCombination = remainderSum;
                }
            }
        }
        return bestRemainderCombination;
    }

    public static ArrayList<Integer> bestSumMemo(int[] nums, int target, ArrayList<Integer>[] memo) {
        if (target > 0 && memo[target] != null) {
            return memo[target];
        }
        if (target == 0)
            return new ArrayList<Integer>();
        if (target < 0)
            return null;

        ArrayList<Integer> bestRemainderCombination = null;

        for (int num : nums) {
            int remainder = target - num;
            ArrayList<Integer> remainderSum = bestSumMemo(nums, remainder, memo);
            if (remainderSum != null) {
                ArrayList<Integer> remainderTargetComb = new ArrayList<Integer>(remainderSum);
                remainderTargetComb.add(num);
                if (bestRemainderCombination == null || bestRemainderCombination.size() > remainderTargetComb.size()) {
                    bestRemainderCombination = remainderTargetComb;
                }
            }
        }
        memo[target] = bestRemainderCombination;
        return bestRemainderCombination;
    }

    public static List<Integer> bestSumChatGPT(int[] nums, int target) {
        boolean[] memo = new boolean[target + 1];
        memo[0] = true;
        List<Integer>[] combination = new List[target + 1];
    
        for (int i = 0; i <= target; i++) {
            if (memo[i]) {
                for (int num : nums) {
                    if (i + num <= target) {
                        memo[i + num] = true;
                        List<Integer> newCombination;
                        if (combination[i] != null) {
                            newCombination = new ArrayList<>(combination[i]);
                        } else {
                            newCombination = new ArrayList<>();
                        }
                        newCombination.add(num);
                        if (combination[i + num] == null || combination[i + num].size() > newCombination.size()) {
                            combination[i + num] = newCombination;
                        }
                    }
                }
            }
        }
        return combination[target];
    }
    
}
