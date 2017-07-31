"use strict";

function arrayPreviousLess(items) {
    var result = new Array();
    for (var i = 0; i < items.length; i++) {
        var substitute = -1;
        for (var j = 0; j < i; j++) {
            if (items[j] < items[i]) {
                substitute = items[j];
            }
        }
        result.push(substitute);
    }
    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
//# sourceMappingURL=ArrayPreviousLess.js.map