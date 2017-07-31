"use strict";

function characterParity(symbol) {
    if (symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57) {
        var number = parseInt(symbol);
        if (number % 2 == 0) return "even";else return "odd";
    } else return "not a digit";
}
//# sourceMappingURL=CharacterParity.js.map