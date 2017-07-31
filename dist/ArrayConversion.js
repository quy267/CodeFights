"use strict";

function arrayConversion(inputArray) {
    var operation = 1;
    while (inputArray.length > 1) {
        var newArray = new Array();
        for (var i = 0; i < inputArray.length; i += 2) {
            if (operation % 2 == 1) {
                newArray.push(inputArray[i] + inputArray[i + 1]);
            } else {
                newArray.push(inputArray[i] * inputArray[i + 1]);
            }
        }
        inputArray = newArray;
        operation++;
    }
    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
//# sourceMappingURL=ArrayConversion.js.map