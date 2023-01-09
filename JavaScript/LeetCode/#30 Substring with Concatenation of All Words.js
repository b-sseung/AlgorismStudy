var findSubstring = function(s, words) {
    const wordLength = words[0].length;
    const wordCount = words.length;
    const wordLen = wordLength * wordCount;

    let map = new Array();
    let result = new Array();
    
    for (let word of words) map[word] = map[word] + 1 || 1;

    for (let i = 0; i <= s.length - wordLen; i++) {
        let subWord = s.slice(i, i + wordLen);
        if (isCheck(subWord, map, wordLength)) result.push(i);
    }

    return result;
};

function isCheck(words, map, length) {
    let list = new Array();
    for (let i = 0; i < words.length; i+=length) {
        let word = words.slice(i, i+length);
        list[word] = list[word]+1 || 1;
    }

    for (let key in map) {
        if (list[key] !== map[key]) return false;
    }

    return true;
};
