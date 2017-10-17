function swapDiagonals(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        [matrix[i][i], matrix[i][n - 1 - i]] = [matrix[i][n - 1 - i], matrix[i][i]];
    }
    return matrix;
}

console.log(swapDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
