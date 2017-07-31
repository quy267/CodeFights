"use strict";

function leastFactorial(n) {
    var result = 1;
    for (var i = 1; i < n; i++) {
        result = result * i;
        if (result >= n) {
            break;
        }
    }
    return result;
}

console.log(leastFactorial(17));
//# sourceMappingURL=LeastFactorial.js.map