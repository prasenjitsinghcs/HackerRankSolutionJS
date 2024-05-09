class NextPermutation {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 6, 5, 4 };
        display(nums);
        int [] output = nextPermutation(nums);
        display(output);
    }

    public static int[] nextPermutation(int[] nums) {
        int n = nums.length, i, j;

        /* Get trverse array from right to left to get pivot = i where nums[i] < nums[i + 1] */    
        for(i = n - 2; i >= 0; i--) {
            if (nums[i] < nums[i + 1]) {
                break;
            }
        }

        if (i < 0) { /* reverse the array if pivot point doesn't eixst */
            reverse(nums, 0, n - 1);
        } else {
            /**
             * If pivot exist then traverse the array from n - 1 to i + 1
             * If the pivot element nums[i] is less then the element nums[j] then
             * swap the elements nums[i] and nums[j]
             *  
             */
            for(j = n - 1; j > i; j--) {
                if (nums[i] < nums[j]) {
                    break;
                }
            }
            swap(nums, i, j);

            /**
             * minimize the suffix part 
             */
            reverse(nums, i + 1, n - 1);
        }
        return nums;
    }

    static void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    static void display(int[] nums) {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < nums.length; i++) {
            sb.append(" " + nums[i]);
        }
        System.out.println(sb.toString());
    }
}