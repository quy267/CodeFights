"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function allLongestStrings(inputArray) {
    var l = Math.max.apply(Math, _toConsumableArray(inputArray.map(function (x) {
        return x.length;
    })));
    return inputArray.filter(function (x) {
        return x.length == l;
    });
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
//# sourceMappingURL=AllLongestStrings.js.map