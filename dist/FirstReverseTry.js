"use strict";

function firstReverseTry(arr) {
    if (arr.length == 0) {
        return arr;
    }
    var tmp = void 0;
    tmp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tmp;
    return arr;
}

console.log(firstReverseTry([1, 2, 3, 4, 5]));
//# sourceMappingURL=FirstReverseTry.js.map