"use strict";

function newNumeralSystem(number) {
    var n = number.charCodeAt(0) - 65;
    var result = new Array();
    for (var i = 0; i <= n / 2; i++) {
        result.push(String.fromCharCode(i + 65) + " + " + String.fromCharCode(n - i + 65));
    }
    return result;
}
//# sourceMappingURL=NewNumeralSystem.js.map