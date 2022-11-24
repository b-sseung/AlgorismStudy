var convert = function(s, numRows) {
    let result = "";
    let cut = numRows * 2 - 2;
    
    if (cut == 0) return s;

    let word = new Array();
    let index = 0;
    while (index < s.length) {
        word.push(s.substring(index, Math.min(index + cut, s.length)).split(""));
        index += cut
    }

    let start = 1;
    let end = cut-1;
    for (let i = 0; i < word.length; i++) {
        result += word[i][0];
    }

    while (start <= end) {
        for (let i = 0; i < word.length; i++) {
            result += (word[i][start] != null ? word[i][start] : "");
            if (start === end) continue;
            result += (word[i][end] != null ? word[i][end] : "");
        }
        start++;
        end--;
    }
    return result;
};
