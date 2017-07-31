'use strict';

function additionWithoutCarrying(param1, param2) {
    var arrN = parseInt(param1, 10).toString(10).split('');
    var arrM = parseInt(param2, 10).toString(10).split('');
    if (arrN.length < arrM.length) {
        while (arrN.length < arrM.length) {
            arrN.unshift('0');
        }
    } else if (arrN.length > arrM.length) {
        while (arrN.length > arrM.length) {
            arrM.unshift('0');
        }
    }
    var a = void 0,
        b = void 0,
        tmp = void 0;
    var result = [];
    for (var i = 0; i < arrM.length; i++) {
        a = parseInt(arrM[i]);
        b = parseInt(arrN[i]);
        tmp = a + b;
        if (tmp > 9) {
            tmp = tmp % 10;
        }
        result[i] = tmp;
    }
    return parseInt(result.join(''), 10);
}

console.log(additionWithoutCarrying(456, 1734));
//# sourceMappingURL=AdditionWithoutCarrying.js.map