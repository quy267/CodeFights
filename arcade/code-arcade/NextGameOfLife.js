function nextGameOfLife(seed) {
    let result = new Array(seed.length);
    seed[-1] = new Array(seed[0].length);
    seed[-1].fill(-1);
    seed[0]
    for (let i = 0; i < seed.length; i++) {
        for (let j = 0; j < seed[i].length; j++) {
            result[i] = new Array(seed[i].length);
            result[i].fill(0, 0, seed[i].length);
            if (seed[i][j] == 0) {
                if ([[seed[i - 1][j]], seed[i + 1][j], seed[i][j - 1], seed[i][j + 1], seed[i + 1][j + 1], seed[i - 1][j - 1], seed[i + 1][j - 1], seed[i - 1][j + 1]].filter(function (currentValue) {
                        return currentValue == 1;
                    }).length >= 3) {
                    result[i][j] = 1;
                }
            }
            else if ([[seed[i - 1][j]], seed[i + 1][j], seed[i][j - 1], seed[i][j + 1], seed[i + 1][j + 1], seed[i - 1][j - 1], seed[i + 1][j - 1], seed[i - 1][j + 1]].filter(function (currentValue) {
                    return currentValue == 1;
                }).length == 3 || ([[seed[i - 1][j]], seed[i + 1][j], seed[i][j - 1], seed[i][j + 1], seed[i + 1][j + 1], seed[i - 1][j - 1], seed[i + 1][j - 1], seed[i - 1][j + 1]].filter(function (currentValue) {
                    return currentValue == 1;
                }).length == 2)) {
                result[i][j] = 1;
            }
        }
    }
    return result;
}

console.log(nextGameOfLife([[0, 1, 0], [0, 1, 0], [0, 1, 0]]));


