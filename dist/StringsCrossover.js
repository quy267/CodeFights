"use strict";

function stringsCrossover(inputArray, result) {
    var output = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        for (var j = i + 1; j < inputArray.length; j++) {
            if (check(inputArray[i], inputArray[j], result)) {
                output++;
            }
        }
    }
    return output;
}

function check(s1, s2, result) {
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] != result[i] && s2[i] != result[i]) {
            return false;
        }
    }
    return true;
}

console.log(stringsCrossover(["abc", "aaa", "aba", "bab"], "bbb"));
//# sourceMappingURL=StringsCrossover.js.map