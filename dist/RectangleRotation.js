"use strict";

function rectangleRotation(a, b) {
    var sqr = function sqr(x) {
        return x * x;
    };
    var answer = 0;
    for (var x = -a - b; x <= a + b; x++) {
        for (var y = -a - b; y <= a + b; y++) {
            if (2 * sqr(x - y) <= sqr(a) && 2 * sqr(x + y) <= sqr(b)) {
                answer++;
            }
        }
    }
    return answer;
}

console.log(rectangleRotation(6, 4));
//# sourceMappingURL=RectangleRotation.js.map