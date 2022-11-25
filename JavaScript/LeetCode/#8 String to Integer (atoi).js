var myAtoi = function(s) {
    let min = Math.pow(2, 31) * (-1);
    let max = Math.pow(2, 31) - 1;

    let number = "0";
    let index = 0;
    let sign = "+";
    while (s.charAt(index) == ' ') { index++; }

    if (s.length > index && (s.charAt(index) == '-' || s.charAt(index) == '+')) {
        sign = s.charAt(index);
        index++;
    }

    while (s.length > index && s.charAt(index) >= '0' && s.charAt(index) <= '9') {
        number += s.charAt(index);
        index++;
    }

    number = parseInt(number) * (sign == '+' ? 1 : -1);
    
    if (min > number) {
        return min;
    } else if (max < number) {
        return max;
    } else {
        return number;
    }
};
