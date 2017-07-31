'use strict';

function secondRightmostZeroBit(n) {
    return fun(n);
}

function fun(n) {
    var arr = parseInt(n, 10).toString(2).split('');
    arr.reverse();
    var m = 0,
        i = void 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            m++;
        }
        if (m == 2) {
            break;
        }
    }
    return Math.pow(2, i);
}

console.log(secondRightmostZeroBit(37));
//# sourceMappingURL=SecondRightmostZeroBit.js.map