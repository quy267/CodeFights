"use strict";

function countBlackCells(n, m) {
    /*https://math.stackexchange.com/questions/1121541/number-of-unit-squares-that-meet-a-given-diagonal-line-segment-in-more-than-one
            * m*n -gcd(m,n) + (gcd(m,n) -1) *2 */
    var gcd = function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b);
    };

    return m + n + gcd(n, m) - 2;
}

console.log(countBlackCells(8, 12));
//# sourceMappingURL=CountBlackCells.js.map