function minesweeper1(gameboard) {
    let countMinesweeper = (i, j) => {
        let count = 0;
        if (j > 0) {
            if (gameboard[i][j - 1] == 9) {
                count++;
            }
        }

        if (j < n - 1) {
            if (gameboard[i][j + 1] == 9) {
                count++;
            }
        }


        if (i > 0 && j > 0) {
            if (gameboard[i - 1][j - 1] == 9) {
                count++;
            }
        }

        if (i > 0 && j < n - 1) {
            if (gameboard[i - 1][j + 1] == 9) {
                count++;
            }
        }

        if (j > 0 && i < m - 1) {
            if (gameboard[i + 1][j - 1] == 9) {
                count++;
            }
        }


        if (i < m - 1 && j < n - 1) {
            if (gameboard[i + 1][j + 1] == 9) {
                count++;
            }
        }

        if (i > 0) {
            if (gameboard[i - 1][j] == 9) {
                count++;
            }
        }

        if (i < m - 1) {
            if (gameboard[i + 1][j] == 9) {
                count++;
            }
        }

        return count;
    };


    let m = gameboard.length, n = gameboard[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (gameboard[i][j] != 9) {
                if (countMinesweeper(i, j) != gameboard[i][j]) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(minesweeper1([[0, 1, 9, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0]]));
