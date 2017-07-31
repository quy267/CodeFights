"use strict";

function threeSplit(a) {
    var sum = 0;
    a.forEach(function (value) {
        sum += value;
    });
    var temp = sum % 3;
    if (!(temp == 0)) {
        return 0;
    }
    sum /= 3;
    var count = 0;
    var sum1 = 0,
        sum2 = 0;
    for (var i = 0; i < a.length - 2; i++) {
        sum1 += a[i];
        if (sum1 == sum) {
            sum2 = 0;
            for (var j = i + 1; j < a.length - 1; j++) {
                sum2 += a[j];
                if (sum2 == sum) {
                    count++;
                }
            }
        }
    }
    return count;
}
//# sourceMappingURL=ThreeSplit.js.map