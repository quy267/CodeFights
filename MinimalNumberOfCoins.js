function minimalNumberOfCoins(coins, price) {
    coins.sort(function (a, b) {
        return a - b;
    });

    let r = 0;
    let l = coins.length - 1;
    while (price > 0) {
        while (price < coins[l]) {
            l -= 1;
            if (l < 0)
                break;
        }
        price -= coins[l];
        r += 1;
    }
    return r;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));