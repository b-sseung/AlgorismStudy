var lengthOfLongestSubstring = function(s) {
    let word = s.split("");
    let result = "";
    let ing = "";
    for (var i = 0; i < word.length; i++) {
        if (ing.indexOf(word[i]) == -1) {
            ing += word[i];
        } else {
            ing = ing.substring(ing.indexOf(word[i])+1, ing.length) + word[i];
        }

        if (result.length < ing.length) {
                result = ing;
        }
    }
    if (result.length < ing.length) result = ing;
    return result.length;
};
