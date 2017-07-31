"use strict";

function comfortableNumbers(l, r) {
    if (l == r) return 0;
    var a = l,
        b = a + 1,
        sumA = 0,
        pairs = 0;
    var aStr = void 0,
        aX = void 0,
        bStr = void 0,
        bX = void 0,
        sumB = void 0;
    while (a < r) {
        aStr = a.toString();
        aX = 0;

        while (aX < aStr.length) {
            sumA = sumA + parseInt(aStr[aX] + "", 10);
            aX = aX + 1;
        }
        while (b <= r) {
            bStr = b.toString();
            bX = 0;
            sumB = 0;
            while (bX < bStr.length) {
                sumB = sumB + parseInt(bStr[bX] + "");
                bX = bX + 1;
            }
            if (b >= a - sumA && b <= a + sumA && a >= b - sumB && a <= b + sumB) {
                pairs = pairs + 1;
            }
            b = b + 1;
        }
        a = a + 1;
        b = a + 1;
        sumA = 0;
    }
    return pairs;
}

console.log(comfortableNumbers(10, 12));
//# sourceMappingURL=ComfortableNumbers.js.map