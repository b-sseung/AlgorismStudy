var reverse = function(x) {
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(2, 31) * (-1);

    let result = 0;
    while (x != 0) {
        result = result * 10 + (x % 10);
        x = (x - (x % 10)) / 10;
    }

    if (result < min || result > max) {
        return 0;
    } else {
        return result;
    }
};
