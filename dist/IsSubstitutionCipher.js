"use strict";

function isSubstitutionCipher(string1, string2) {
    var codes1 = new Map();
    var codes2 = new Map();
    for (var i = 0; i < string1.length; i++) {
        var c1 = string1[i];
        var c2 = string2[i];
        if (codes1.has(c1)) {
            if (c2 != codes1.get(c1)) return false;
        } else {
            codes1.set(c1, c2);
        }
        if (codes2.has(c2)) {
            if (c1 != codes2.get(c2)) return false;
        } else {
            codes2.set(c2, c1);
        }
    }
    return true;
}
//# sourceMappingURL=IsSubstitutionCipher.js.map