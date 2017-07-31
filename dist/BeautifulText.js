"use strict";

function beautifulText(inputString, l, r) {
    for (var i = l; i <= r; i++) {
        if (inputString.length % i == Math.floor(inputString.length / i) - 1) {
            var isSpace = true;
            var j = (inputString.length - i + 1) / i;
            for (var k = 1; k < j; k++) {
                isSpace = isSpace && inputString[k * (i + 1) - 1] == ' ';
            }
            if (isSpace) return isSpace;
        }
    }
    return false;
}

// console.log(beautifulText("skspv iakqh ygzwz ntkmi xqhpj", 3, 7));
console.log(beautifulText("abc def ghi", 4, 10));
//# sourceMappingURL=BeautifulText.js.map