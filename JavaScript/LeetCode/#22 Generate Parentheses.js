var generateParenthesis = function(n) {
    let result = new Array();
    
    const createResult = (open, close, word) => {
        if (n === open && n === close) {
            result.push(word);
            return;
        }

        let nopen = n-open;
        let nclose = n-close;

        if (nopen === nclose || (nopen < nclose && nopen !== 0)) {
            let newWord = word + "(";
            createResult(open+1, close, newWord);
        }

        if (nopen < nclose) {
            let newWord = word + ")";
            createResult(open, close+1, newWord);
        }
    }

    createResult(0, 0, "");

    return result;
};
