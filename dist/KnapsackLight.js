"use strict";

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (maxW < weight1 && maxW < weight2) {
        return 0;
    }
    if (maxW >= weight1 + weight2) {
        return value1 + value2;
    }

    if (maxW >= weight1 && maxW >= weight2) {
        if (value1 > value2) {
            return value1;
        } else {
            return value2;
        }
    }

    if (maxW >= weight1 && maxW < weight2) {
        return value1;
    } else {
        return value2;
    }
}

console.log(knapsackLight(5, 3, 7, 4, 6));
//# sourceMappingURL=KnapsackLight.js.map