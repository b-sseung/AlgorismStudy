var letterCombinations = function(digits) {
    const numbers = {
        "2" : ['a', 'b', 'c'],
        "3" : ['d', 'e', 'f'],
        "4" : ['g', 'h', 'i'],
        "5" : ['j', 'k', 'l'],
        "6" : ['m', 'n', 'o'],
        "7" : ['p', 'q', 'r', 's'],
        "8" : ['t', 'u', 'v'],
        "9" : ['w', 'x', 'y', 'z']
    }
    if (digits.length === 0) return new Array();
    
    const digitsList = digits.split("");
    const result = new Array();

    //array, number, string
    const createWord = (digitsList, index, word) => {
        if (digitsList.length === index) {
            result.push(word);
            return;
        }

        const getWord = numbers[digitsList[index]];
        for (let i = 0; i < getWord.length; i++) {
            createWord(digitsList, index+1, word+getWord[i]);
        }
    }

    createWord(digitsList, 0, '');

    return result;
};
