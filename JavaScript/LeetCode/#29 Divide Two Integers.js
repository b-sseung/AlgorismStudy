var divide = function(dividend, divisor) {
    let result = parseInt(dividend / divisor);
    
    if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (result < Math.pow(2, 31) * -1) return Math.pow(2, 31) * -1;

    return result;
};
