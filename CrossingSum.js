function crossingSum(matrix, a, b) {
    let m = matrix.length, n = matrix[0].length;
    let result = 0;
    for (let j = 0; j < n; j++) {
        result += matrix[a][j];
    }
    for (let i = 0; i < m; i++) {
        result += matrix[i][b];
    }
    return result - matrix[a][b];
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
