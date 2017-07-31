"use strict";

function starRotation(matrix, width, center, t) {
    var x = center[0];
    var y = center[1];
    for (var i = 0; i < t % 8; i++) {
        for (var k = 1; k <= width / 2; k++) {
            var temp = matrix[x][y + k];
            matrix[x][y + k] = matrix[x - k][y + k];
            matrix[x - k][y + k] = matrix[x - k][y];
            matrix[x - k][y] = matrix[x - k][y - k];
            matrix[x - k][y - k] = matrix[x][y - k];
            matrix[x][y - k] = matrix[x + k][y - k];
            matrix[x + k][y - k] = matrix[x + k][y];
            matrix[x + k][y] = matrix[x + k][y + k];
            matrix[x + k][y + k] = temp;
        }
    }
    return matrix;
}
//# sourceMappingURL=StarRotation.js.map