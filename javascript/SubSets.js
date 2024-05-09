var nums = [1, 2, 3, 7, 5];
var target = 11;
var index = nums.length;


var output = getSubSet(nums, target, index);
console.log(output);

function getSubSet(nums, target, index) {
    if (target === 0) return true;
    if (index === 0) return false;

    if (target < nums[index - 1]) {
        return getSubSet(nums, target, index-1);
    } else {
        return getSubSet(nums, target - nums[index - 1], index-1) || getSubSet(nums, target, index-1);
    }
}