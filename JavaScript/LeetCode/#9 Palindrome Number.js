var isPalindrome = function(x) {
    let startWord = x.toString();
    let endWord = startWord.split("").reverse().join('');
    return startWord === endWord;
};

var isPalindrome = function(x) {
    let word = x.toString();
    for (let i = 0; i < parseInt(word.length/2); i++) {
        if (word[i] !== word[word.length-i-1]) return false;
    }
    return true;
};
