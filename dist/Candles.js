"use strict";

function candles(candlesNumber, makeNew) {
    var burned = 0;
    var leftovers = 0;
    while (candlesNumber > 0) {
        burned += candlesNumber;
        leftovers += candlesNumber;
        candlesNumber = Math.floor(leftovers / makeNew);
        leftovers = leftovers % makeNew;
    }
    return burned;
}

console.log(candles(5, 2));
//# sourceMappingURL=Candles.js.map