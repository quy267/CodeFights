"use strict";

function appleBoxes(k) {
    var yellow = 0,
        red = 0;
    for (var i = 1; i <= k; i++) {
        if (i % 2 == 1) {
            yellow = yellow + i * i;
        } else {
            red = red + i * i;
        }
    }
    return red - yellow;
}

console.log(appleBoxes(5));
//# sourceMappingURL=AppleBoxes.js.map