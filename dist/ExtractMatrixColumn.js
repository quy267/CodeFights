"use strict";

function extractMatrixColumn(matrix, column) {
    var result = new Array();
    for (var i = 0; i < matrix.length; i++) {
        result.push(matrix[i][column]);
    }
    return result;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
//# sourceMappingURL=ExtractMatrixColumn.js.map