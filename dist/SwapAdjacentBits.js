'use strict';

function swapAdjacentBits(n) {
    return fun(n);
}

function fun(n) {
    var arr = parseInt(n, 10).toString(2);
    if (arr.length % 2 != 0) {
        arr = '0' + arr;
    }
    var array = arr.match(/(..?)/g);
    for (var i = 0; i < array.length; i++) {
        if (array[i] == '10') {
            array[i] = '01';
        } else if (array[i] == '01') {
            array[i] = '10';
        }
    }
    return parseInt(array.join(''), 2);
}

console.log(swapAdjacentBits(74));
//# sourceMappingURL=SwapAdjacentBits.js.map