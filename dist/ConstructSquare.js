"use strict";

function constructSquare(s) {
    var letterCnt = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        letterCnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    letterCnt.sort();
    var best = -1;
    var minNumber = Math.pow(10, s.length - 1);
    for (var k = Math.floor(Math.sqrt(minNumber)); k * k < minNumber * 10; k++) {
        var n = k * k;
        var digitCnt = new Array();
        for (var _i = 0; _i < 26; _i++) {
            digitCnt.push(0);
        }
        while (n > 0) {
            digitCnt[n % 10]++;

            n = Math.floor(n / 10);
        }

        digitCnt.sort();
        if (arraysEqual(letterCnt, digitCnt)) {
            best = k * k;
        }
    }
    return best;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}

console.log(constructSquare("ab"));
console.log(constructSquare("zzz"));
console.log(constructSquare("aba"));
//# sourceMappingURL=ConstructSquare.js.map