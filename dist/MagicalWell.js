"use strict";

function magicalWell(a, b, n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        result = result + a * b;
        a++;
        b++;
    }
    return result;
}

console.log(magicalWell(1, 2, 2));
//# sourceMappingURL=MagicalWell.js.map