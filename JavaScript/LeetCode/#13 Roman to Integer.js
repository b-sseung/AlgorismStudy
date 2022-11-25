var romanToInt = function(s) {
    const list = {
        "M" : 1000,
        "CM" : 900,
        "D" : 500,
        "CD" : 400,
        "C" : 100,
        "XC" : 90,
        "L" : 50,
        "XL" : 40,
        "X" : 10,
        "IX" : 9,
        "V" : 5,
        "IV" : 4,
        "I" : 1
    };

    let result = 0;
    for (let key in list) {
        while (true) {
            if (s.indexOf(key) == 0) {
                result += list[key];
                s = s.substring(key.length, s.length);
            } else {
                break;
            }
        }
    }

    return result;
};
