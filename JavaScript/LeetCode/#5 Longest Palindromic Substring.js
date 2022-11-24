var longestPalindrome = function(s) {
    let word = s.split("");
    let check = new Array(word.length);
    let result = "";
    var i, j;
    for (i = 0; i < word.length; i++) {
        check[i] = new Array(word.length);
    }

    for (i = 0; i < word.length; i++) {
        for (j = word.length-1; j >= i; j--) {
            if (result.length >= (j-i+1)) continue;
            if (checkWord(i, j)) {
                result = s.slice(i, j+1);
            }
        }
    }

    return result;

    function checkWord (start, end) {
        if (start > end) return true;
        if (check[start][end] != undefined) {
            return check[start][end];
        }

        if (word[start] !== word[end]) {
            check[start][end] = false;
            return false;
        } else {            
            if (checkWord(start+1, end-1)) {
                check[start][end] = true;
                return true;
            } else {
                check[start][end] = false;
                return false;
            }
        }
    }
};
