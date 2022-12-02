var isValid = function(s) {
    let word = s.split("");
    let stack = new Array();
    let key = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    };

    let result = true;

    for (let i = 0; i < s.length; i++) {
        if (word[i] === "(" || word[i] === "{" || word[i] === "[") {
            stack.push(word[i]);
        } else {
            if (stack.pop() !== key[word[i]]) {
                result = false;
                break;
            }
        }
    }

    return result && stack.length === 0;
};
