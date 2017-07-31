"use strict";

function isTandemRepeat(inputString) {
    if (inputString.length % 2 != 0) return false;

    var word_limit = inputString.length / 2;
    return inputString.substr(0, word_limit) == inputString.substr(word_limit);
}
//# sourceMappingURL=IsTandemRepeat.js.map