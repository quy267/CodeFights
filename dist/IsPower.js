"use strict";

function isPower(n) {
    if (n == 1) return true;
    for (var index = 2; index <= Math.sqrt(n); index++) {
        for (var power = 2; power <= Math.sqrt(n); power++) {
            if (Math.pow(index, power) == n) return true;
        }
    }
    return false;
}

console.log(isPower(125));
console.log(isPower(72));
//# sourceMappingURL=IsPower.js.map