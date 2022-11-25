var threeSum = function(nums) {
    let result = {};
    nums.sort((a, b) => a - b);

    for (let start = 0; start < nums.length; start++) {
        let right = nums.length-1;
        let left = start+1;

        while (left < right) {
            if (nums[start] + nums[left] + nums[right] > 0) {
                right--;
            } else if (nums[start] + nums[left] + nums[right] == 0) {
                result[[nums[start], nums[left], nums[right]]] = [nums[start], nums[left], nums[right]];
                left++;
                right--;
            } else {
                left++;
            }
        }
    }

    return Object.values(result);
};
