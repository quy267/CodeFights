'use strict';

function isCaseInsensitivePalindrome(inputString) {
    var r = inputString.split('').reverse().join('');
    return inputString.toLowerCase() == r.toLowerCase();
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abcdcbA"));
//# sourceMappingURL=IsCaseInsensitivePalindrome.js.map