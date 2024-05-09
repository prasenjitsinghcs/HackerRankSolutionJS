package DP;

public class EqualSumPartition {
    public static void main(String[] args) {
        int[] nums = { 2, 3, 1, 4 };
        int partionCount = 2;

        if (canDoPartion(nums, partionCount) == true) {
            System.out.printf("\nWe can do %d equal partion.\n", partionCount);
        } else {
            System.out.printf("\nWe can't do %d equal partion.\n", partionCount);
        }
        
        int sum =  getSum(nums);
        int target = sum / partionCount; 
        boolean [] memo = new boolean[target + 1];
        if (sum % partionCount == 0 && canEqualSumSubSetMemo(nums, 0, target, memo)) {
            System.out.printf("\nWe can do %d equal partion.\n", partionCount);
        } else {
            System.out.printf("\nWe can't do %d equal partion.\n", partionCount);
        }
        
        if (sum % partionCount == 0 && canEqualSumSubSetTab(nums, target) == true) {
            System.out.printf("\nWe can do %d equal partion.\n", partionCount);
        } else {
            System.out.printf("\nWe can't do %d equal partion.\n", partionCount);
        }
    }

    public static int getSum(int[] nums) {
        int sum = 0;
        for(int num: nums) {
            sum = sum + num;
        }
        return sum;
    }

    public static boolean canDoPartion(int nums[], int partionCount) {
        if (nums.length <= 1) return false;
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        if (sum % partionCount == 0) {
            sum = sum / partionCount;
            return canEqualSumSubSet(nums, 0, sum);
        } else {
            return false;
        }
    }

    public static boolean canEqualSumSubSet(int[] nums, int index, int target) {
        if (target == 0)
            return true;
        if (target < 0)
            return false;

        for (int i = index; i < nums.length; i++) {
            int num = nums[i];
            int remainder = target - num;
            if (remainder >= 0) {
                boolean can = canEqualSumSubSet(nums, index + 1, remainder);
                if (can == true) {
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean canEqualSumSubSetMemo(int[] nums, int index, int target, boolean[] memo) {
        if (memo[target] == true) return memo[target];
        if (target == 0)
            return true;
        if (target < 0)
            return false;

        for (int i = index; i < nums.length; i++) {
            int num = nums[i];
            int remainder = target - num;
            if (remainder >= 0) {
                boolean can = canEqualSumSubSetMemo(nums, index + 1, remainder, memo);
                if (can == true) {
                    memo[target] = true;
                    return true;
                }
            }
        }
        memo[target] = false;
        return false;
    }

    public static boolean canEqualSumSubSetTab(int[] nums, int target) {
        if (target == 0)
            return true;
        if (target < 0)
            return false;

        boolean dp[] = new boolean[target + 1];
        dp[0] = true;
        int index = 0;
        for (int k = 1; k <= target; k++) {
            for (int i = index; i < nums.length; i++) {
                int num = nums[i];
                int remainder = k - num;
                if (remainder >= 0) {
                    boolean can = dp[remainder];
                    if (can == true) {
                        dp[k] = true;
                        index++;
                    }
                }
            }
            
        }

        return dp[target];

    }
}


