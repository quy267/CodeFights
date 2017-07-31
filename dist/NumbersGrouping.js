"use strict";

function numbersGrouping(a) {
    var nGroupList = new Array(100000).fill(0);
    a.forEach(function (value) {
        var index = Math.floor((value - 1) / 10000);
        nGroupList[index] == 0 ? nGroupList[index] += 2 : nGroupList[index]++;
    });
    return nGroupList.reduce(function (sum, value) {
        return sum + value;
    }, 0);
}

console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]));
//# sourceMappingURL=NumbersGrouping.js.map