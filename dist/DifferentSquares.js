"use strict";

function differentSquares(matrix) {
    var hs = new Set();
    for (var i = 0; i < matrix.length - 1; i++) {
        for (var j = 0; j < matrix[0].length - 1; j++) {
            var square = matrix[i][j] + "," + matrix[i][j + 1] + "," + matrix[i + 1][j] + "," + matrix[i + 1][j + 1];
            hs.add(square);
        }
    }
    return hs.size;
}

console.log(differentSquares([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]]));
//# sourceMappingURL=DifferentSquares.js.map