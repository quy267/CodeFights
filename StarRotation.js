function starRotation(matrix, width, center, t) {
    let x = center[0];
    let y = center[1];
    for (let i = 0; i < t % 8; i++) {
        for (let k = 1; k <= width / 2; k++) {
            let temp = matrix[x][y + k];
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
