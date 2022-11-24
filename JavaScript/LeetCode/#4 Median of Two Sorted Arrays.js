var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2);
    nums3.sort((a, b) => {
        return a-b;
    });
    let num = parseInt(nums3.length / 2);
    if (nums3.length % 2 == 0) {
        return (nums3[num-1] + nums3[num]) / 2;
    } else {
        return nums3[num];
    }
};
