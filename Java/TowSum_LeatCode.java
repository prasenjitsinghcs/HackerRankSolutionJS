import java.util.Arrays;
import java.util.HashMap;

class Solution {
    public static void main(String[] args) {
        int[] arr = { 3, 3 };
        int[] ans = new int[2];
        ans = twoSum(arr, 6);
        System.out.println("[" + ans[0] + "," + ans[1] + "]");

        System.out.println("Brute Force");
        int[] input = { 9, 2, 8, 3, 7, 4, 6, 5 };
        System.out.println("Input: " + input.toString());
        int[] output = twoSumBruteForce(input, 8);
        printArray(output);

        System.out.println("Two Pointer Approach");
        int[] output1 = twoSumTwoPointer(input, 8);
        printArray(output1);
    }

    public static void printArray(int[] array) {
        for (int a : array) {
            System.out.println(a);
        }
    }

    public static int[] twoSumBruteForce(int[] nums, int target) {
        int[] ans = new int[2];
        int n = nums.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                if (nums[i] + nums[j] == target) {
                    ans[0] = i;
                    ans[1] = j;
                    return ans;
                }
            }
        }
        return null;
    }

    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] ans = new int[2];

        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i])) {
                ans[1] = i;
                ans[0] = map.get(target - nums[i]);
                return ans;
            }
            map.put(nums[i], i);
        }
        return ans;
    }

    public static int[] twoSumTwoPointer(int[] nums, int target) {
        Arrays.sort(nums);
        int start = 0;
        int end = nums.length - 1;

        while (start < end) {
            int sum = nums[start] + nums[end];
            if (sum == target) {
                return new int[] { nums[start], nums[end] };
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
        return null;
    }
}