'use strict';

function equalPairOfBits(n, m) {
    return fun(n, m);
}

function fun(n, m) {
    var arrN = parseInt(n, 10).toString(2).split('');
    var arrM = parseInt(m, 10).toString(2).split('');

    if (arrN.length < arrM.length) {
        while (arrN.length < arrM.length) {
            arrN.unshift('0');
        }
    } else if (arrN.length > arrM.length) {
        while (arrN.length > arrM.length) {
            arrM.unshift('0');
        }
    }
    arrN.reverse();
    arrM.reverse();
    var i = void 0;
    for (i = 0; i < arrN.length; i++) {
        if (arrM[i] == arrN[i]) {
            break;
        }
    }
    return Math.pow(2, i);
}

console.log(equalPairOfBits(10, 11));
//# sourceMappingURL=EqualPairOfBits.js.map