"use strict";

function isSmooth(arr) {
    if (arr[0] != arr[arr.length - 1]) {
        return false;
    }
    if (arr.length % 2 == 0) {
        if (arr[0] != arr[arr.length / 2] + arr[arr.length / 2 - 1]) {
            return false;
        }
    } else if (arr[0] != arr[Math.floor(arr.length / 2)]) {
        return false;
    }
    return true;
}

console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12]));
//# sourceMappingURL=IsSmooth.js.map