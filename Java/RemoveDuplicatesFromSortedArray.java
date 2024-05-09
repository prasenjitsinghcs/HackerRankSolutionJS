class RemoveDuplicates {
    public static void main(String[] args) {
        int[] nums = {1,2,2,3,3,3,4,4,4,4,5};
        int length = getSortedArrayLength(nums);

        System.out.println("Output: " + length);

        for(int i: nums) {
            System.out.println(i);
        }
    }

    static int getSortedArrayLength(int[] nums) {
        int n = nums.length;
        if (n == 0 || n == 1) {
            return n;
        }
        int left = 0;
        int right = 0;
        while (right <= nums.length - 1) {
            if (nums[right] != nums[right + 1]) {
                nums[left++] = nums[right];
            }
            right++;
        }
        return left + 1;
    }
}