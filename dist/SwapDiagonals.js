"use strict";

function swapDiagonals(matrix) {
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        var _ref = [matrix[i][n - 1 - i], matrix[i][i]];
        matrix[i][i] = _ref[0];
        matrix[i][n - 1 - i] = _ref[1];
    }
    return matrix;
}

console.log(swapDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//# sourceMappingURL=SwapDiagonals.js.map