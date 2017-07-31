'use strict';

function rounders(value) {
    var arr = parseInt(value, 10).toString(10).split('');
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] != 0) {
            if (parseInt(arr[i], 10) >= 5) {
                arr[i - 1] = parseInt(arr[i - 1], 10) + 1;
            }
            arr[i] = 0;
        }
    }
    return parseInt(arr.join(''), 10);
}

console.log(rounders(1445));
console.log(rounders(1234));
console.log(rounders(15));
//# sourceMappingURL=Rounders.js.map