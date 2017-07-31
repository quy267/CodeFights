"use strict";

function areSimilar(a, b) {
    var tmp = 0,
        a1 = void 0,
        b1 = void 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            tmp++;
            a1 = b1;
            b1 = i;
        }
    }
    return tmp == 0 || tmp == 2 && a[a1] == b[b1] && a[b1] == b[a1];
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 1]));
//# sourceMappingURL=AreSimilar.js.map