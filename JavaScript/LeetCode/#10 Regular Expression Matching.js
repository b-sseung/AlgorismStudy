var isMatch = function(s, p) {
    const re = new RegExp(p);
    if (s.replace(re, "").length == 0) {
        return true;
    } else {
        return false;
    }
};
