"use strict";

function replaceMiddle(arr) {
    if (arr.length % 2 == 0) {
        return arr.slice(0, arr.length / 2 - 1).concat(arr[arr.length / 2] + arr[arr.length / 2 - 1]).concat(arr.slice(arr.length / 2 + 1, arr.length));
    } else return arr;
}

console.log(replaceMiddle([7, 2, 2, 5, 10, 7]));
console.log(replaceMiddle([-5, -5, 10]));
//# sourceMappingURL=ReplaceMiddle.js.map