function increaseNumberRoundness(n) {
    let arrN = parseInt(n, 10).toString(10).split('');
    let result = false, len0 = 0, tmp;
    let i = 0;
    while (i < arrN.length) {
        if (arrN[i] == '0') {
            tmp = 1;
            while (arrN[i + 1] == '0') {
                tmp++;
                i++;
            }
            if (len0 < tmp) {
                len0 = tmp;
            }
        }
        i++;
    }

    for (i = 1; i < arrN.length - 1; i++) {
        if (arrN[i] != 0 && arrN[i - 1] == 0) {
            tmp = 1;
            while (arrN[i + 1] == 0 && i + 1 <= arrN.length) {
                i++;
                tmp++;
            }
            if (tmp > len0) {
                return true;
            }
        }
    }
    return false;
}

console.log(increaseNumberRoundness(11000));
