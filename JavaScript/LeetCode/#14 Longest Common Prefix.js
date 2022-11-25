var longestCommonPrefix = function(strs) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        let word = strs[0].substring(0, i+1);
        let check = true;
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].indexOf(word) != 0) {
                check = false;
                break;
            }
        }
        if (check) result = word; else break;
    }
    return result;
};
