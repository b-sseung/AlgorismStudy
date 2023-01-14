var nextPermutation = function(nums) {
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            let large = nextLarge(i);
            swap(i, large);
            reverse(i+1);
            return;
        }
    }

    nums.reverse();

    function swap(i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    function reverse(index) {
        let start = index, end = nums.length-1;

        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    function nextLarge(index) {
        for (let i = nums.length; i >= 0; i--) {
            if (nums[i] > nums[index]) return i;
        }
    }
};
