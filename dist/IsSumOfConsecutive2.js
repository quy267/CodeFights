"use strict";

function isSumOfConsecutive2(n) {
    var result = 0;
    var number = void 0,
        start = void 0;
    for (var i = 1; i < n; i++) {
        number = n;
        start = i;
        while (number > 0) {
            number -= start;
            start++;
        }
        if (number == 0) {
            result++;
        }
    }
    return result;
}

console.log(isSumOfConsecutive2(9));
console.log(isSumOfConsecutive2(8));
//# sourceMappingURL=IsSumOfConsecutive2.js.map