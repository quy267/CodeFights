function constructSquare(s) {
    let letterCnt = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        letterCnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    letterCnt.sort();
    let best = -1;
    let minNumber = Math.pow(10, s.length - 1);
    for (let k = Math.floor(Math.sqrt(minNumber)); k * k < minNumber * 10; k++) {
        let n = k * k;
        let digitCnt = new Array();
        for (let i = 0; i < 26; i++) {
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
    if (arr1.length !== arr2.length)
        return false;
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

console.log(constructSquare("ab"));
console.log(constructSquare("zzz"));
console.log(constructSquare("aba"));