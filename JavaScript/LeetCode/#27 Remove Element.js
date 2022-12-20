var removeElement = function(nums, val) {
    let position = 0;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[position] === val) {
            nums.push(nums.splice(position, 1));
            k++;
        } else {
            position++;
        }
    }
    return nums.length - k;
}
