"use strict";

function integerToStringOfFixedWidth(number, width) {
    var str = number.toString();
    if (str.length == width) {
        return str;
    }
    if (str.length > width) {
        while (str.length != width) {
            str = str.slice(1);
        }
    } else if (str.length < width) {
        while (str.length != width) {
            str = "0" + str;
        }
    }
    return str;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
//# sourceMappingURL=IntegerToStringOfFixedWidth.js.map