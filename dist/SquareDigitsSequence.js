"use strict";

function squareDigitsSequence(a0) {
    var cur = a0;
    var was = new Array();

    while (!was.includes(cur)) {
        was.push(cur);
        var next = 0;
        while (cur > 0) {
            next += cur % 10 * (cur % 10);
            cur = Math.floor(cur / 10);
        }
        cur = next;
    }

    return was.length + 1;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
//# sourceMappingURL=SquareDigitsSequence.js.map