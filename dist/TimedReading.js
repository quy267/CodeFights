"use strict";

function timedReading(maxLength, text) {
    var count = 0;
    var status = 0;
    var wordLength = 0;
    for (var i = 0; i < text.length; ++i) {
        var c = text.charAt(i);
        if ("a" <= c && c <= "z" || "A" <= c && c <= "Z") {
            if (status == 0) {
                wordLength = 1;
                status = 1;
            } else if (status == 1) {
                wordLength++;
                if (wordLength > maxLength) {
                    status = 2;
                }
            }
        } else {
            if (status == 1) {
                count++;
                status = 0;
            } else if (status == 2) {
                status = 0;
            }
        }
    }
    if (status == 1) {
        count++;
    }
    return count;
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"));
//# sourceMappingURL=TimedReading.js.map