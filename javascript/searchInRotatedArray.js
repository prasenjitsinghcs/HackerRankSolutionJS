/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;

    var i = 0;
    while (nums[i] < nums[i + 1]) {
        if (target === nums[i]) {
            return i;
        }
        i++; 
    }

    low = i + 1;

    return getMid(nums, low, high, target);
};

function getMid(nums, low, high, target) {
    var mi = Math.floor( (high - low) / 2  ) + low;

    var mie = nums[mi];

    if (mie === target) {
        return mi;
    } else if (target < mie) {
        high = mi - 1;
        return getMid(nums, low, high, target)
    } else {
        low = mi + 1;
        return getMid(nums, low, high, target)
    }
}
