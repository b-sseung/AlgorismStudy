var intToRoman = function(num) {
    const value = [1000, 500, 100, 50, 10, 5, 1];
    const symbol = ["M", "D", "C", "L", "X", "V", "I"];

    let result = "";

    for (let i = 0; i < 7; i++) {
        let number = parseInt(num / value[i]);
        if (i % 2 == 0) {
            num %= value[i];
            if (i == 0) {
                result += symbol[i].repeat(number);
            } else {
                if (number == 4) {
                    result += symbol[i] + symbol[i-1];
                } else {
                    result += symbol[i].repeat(number);
                }
            }
        } else {
            if (parseInt(num / value[i+1]) == 9) {
                result += symbol[i+1] + symbol[i-1];
                num %= value[i+1];
                i++;
            } else {
                result += (symbol[i].repeat(number));
                num %= value[i];
            }
        }
    }

    return result;
};
