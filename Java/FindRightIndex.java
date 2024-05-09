class FindRightIndex {
    public static void main(String[] args) {
        int[] nums = { 1, 3, 5, 6 };
        int target = 5;
        int index = searchIndex(nums, 0, nums.length - 1, target);
        System.out.println(index);
    }

    public static int searchIndex(int[] nums, int left, int right, int target) {
        int mid = left + (right - left) / 2;

        if (left == right) {
            return right + 1;
        }
        
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            return searchIndex(nums, left, mid - 1, target);
        } else {
            return searchIndex(nums, mid + 1, right, target);
        }
    }
}