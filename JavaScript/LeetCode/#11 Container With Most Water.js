code1:
var maxArea = function(height) {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        if (result > height[i] * (height.length-1-i)) continue;
        for (let j = i+1; j < height.length; j++) {
            var temp = (j - i) * Math.min(height[i], height[j]);
            result = Math.max(temp, result);
        }
    }
    return result;
};

code2: https://leetcode.com/problems/container-with-most-water/solutions/1915172/java-c-easiest-explanations/
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let result = 0;
    
    while (left < right) {
        result = Math.max(result, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) left++; else right--;
    }
    return result;
};
