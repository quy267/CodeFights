"use strict";

function cyclicString(s) {
    for (var i = 1; i <= s.length; i++) {
        var part = s.substr(0, i);
        var isRoot = true;
        for (var j = 0; j < s.length; j++) {
            if (s[j] != part[j % part.length]) {
                isRoot = false;
                break;
            }
        }
        if (isRoot) {
            return i;
        }
    }
    return 0;
}

console.log(cyclicString("cabca"));
//# sourceMappingURL=CyclicString.js.map