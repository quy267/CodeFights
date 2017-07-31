function candles(candlesNumber, makeNew) {
    let burned = 0;
    let leftovers = 0;
    while (candlesNumber > 0) {
        burned += candlesNumber;
        leftovers += candlesNumber;
        candlesNumber = Math.floor(leftovers / makeNew);
        leftovers = leftovers % makeNew;
    }
    return burned;
}

console.log(candles(5, 2));