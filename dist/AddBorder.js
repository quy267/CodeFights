"use strict";

function addBorder(picture) {
    var answer = new Array();
    var decoratedRow = "";
    for (var i = 0; i < picture[0].length + 2; i++) {
        decoratedRow += "*";
    }
    answer.push(decoratedRow);
    for (var _i = 0; _i < picture.length; _i++) {
        var row = "*";
        for (var j = 0; j < picture[0].length; j++) {
            row += picture[_i][j];
        }
        row += "*";
        answer.push(row);
    }
    answer.push(decoratedRow);
    return answer;
}

console.log(addBorder(["abc", "ded"]));
//# sourceMappingURL=AddBorder.js.map