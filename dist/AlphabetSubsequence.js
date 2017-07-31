"use strict";

function alphabetSubsequence(s) {
    var arr = new Array();
    for (var i = 0; i < s.length; i++) {
        arr[i] = s[i].charCodeAt(0) - "a".charCodeAt(0);
    }
    for (var _i = 0; _i < arr.length - 1; _i++) {
        for (var j = _i + 1; j < arr.length; j++) {
            if (arr[_i] >= arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
//# sourceMappingURL=AlphabetSubsequence.js.map