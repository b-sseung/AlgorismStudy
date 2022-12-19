var removeDuplicates = function(nums) {
    let index = 0;
    let position = 0;
    let check = new Array();

    while (position < nums.length) {
        if (check.indexOf(nums[position]) === -1) {
            check.push(nums[position]);
            nums.splice(index, 0, nums.splice(position, 1));
            index++;
        }
        position++;
    }
    return check.length;    
};
