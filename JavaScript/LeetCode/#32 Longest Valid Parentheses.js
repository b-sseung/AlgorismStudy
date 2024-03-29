var longestValidParentheses = function(s) {
    let stack = [-1], result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i);
        else if (stack.length === 1) stack[0] = i;
        else 
            stack.pop();
            result = Math.max(result, i - stack[stack.length-1]);
    }

    return result;
};
