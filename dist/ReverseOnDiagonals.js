"use strict";

function reverseOnDiagonals(matrix) {
    for (var i = 0; i < matrix.length / 2; i++) {
        var x = matrix[i][i];
        matrix[i][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - i];
        matrix[matrix.length - 1 - i][matrix.length - 1 - i] = x;

        x = matrix[i][matrix.length - 1 - i];
        matrix[i][matrix.length - 1 - i] = matrix[matrix.length - 1 - i][i];
        matrix[matrix.length - 1 - i][i] = x;
    }
    return matrix;
}

console.log(reverseOnDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//# sourceMappingURL=ReverseOnDiagonals.js.map