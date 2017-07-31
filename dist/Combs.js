'use strict';

function combs(comb1, comb2) {
    var ok = function ok(c1, c2) {
        for (var i = 0; i < Math.min(c1.length, c2.length); i++) {
            if (c1[i] == '*' && c2[i] == '*') return false;
        }return true;
    };
    var s1 = comb1;
    var s2 = comb2;
    while (!ok(s1, s2)) {
        s2 = "." + s2;
    }var min = Math.max(s1.length, s2.length);
    s1 = comb1;
    s2 = comb2;
    while (!ok(s1, s2)) {
        s1 = "." + s1;
    }if (min < Math.max(s1.length, s2.length)) return min;else return Math.max(s1.length, s2.length);
}
//# sourceMappingURL=Combs.js.map