"use strict";

function weakNumbers(n) {
    var result = new Array();
    var weakness = 0,
        weakest = 0;
    for (var index = 1; index <= n; index++) {
        var w = getWeakness(index);
        if (w > weakest) {
            weakest = w;
            weakness = 1;
        } else if (w == weakest) weakness++;
    }
    result.push(weakest);
    result.push(weakness);
    return result;
}

function getWeakness(n) {
    var count = 0;
    if (n == 1) return 0;
    var dN = getD(n);
    for (var i = 1; i < n; i++) {
        if (getD(i) > dN) count++;
    }
    return count;
}

function getD(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    var count = 0;
    var halfN = n / 2;
    for (var i = 2; i <= halfN; i++) {
        if (n % i == 0) count++;
    }
    return count + 2;
}

console.log(weakNumbers(9));
//# sourceMappingURL=WeakNumbers.js.map