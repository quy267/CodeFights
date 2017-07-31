function additionWithoutCarrying(param1, param2) {
    let arrN = parseInt(param1, 10).toString(10).split('');
    let arrM = parseInt(param2, 10).toString(10).split('');
    if (arrN.length < arrM.length) {
        while (arrN.length < arrM.length) {
            arrN.unshift('0')
        }
    }
    else if (arrN.length > arrM.length) {
        while (arrN.length > arrM.length) {
            arrM.unshift('0');
        }
    }
    let a, b, tmp;
    let result = [];
    for (let i = 0; i < arrM.length; i++) {
        a = parseInt(arrM[i]);
        b = parseInt(arrN[i]);
        tmp = a + b;
        if (tmp > 9) {
            tmp = tmp % 10;
        }
        result[i] = tmp;
    }
    return parseInt(result.join(''),10);
}

console.log(additionWithoutCarrying(456, 1734));
