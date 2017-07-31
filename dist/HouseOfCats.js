"use strict";

function houseOfCats(legs) {
    var people = new Array();
    var p = 0;
    while (legs >= 0) {
        var c = 0;
        if (legs % 4 == 2 || legs % 4 == 0) {
            if (legs % 4 == 2) {
                c = 1;
            } else {
                c = 0;
            }
        }
        people.push(p + c);
        p += 2;
        legs -= 4;
    }
    return people.sort(function (a, b) {
        return a - b;
    });
}

console.log(houseOfCats(44));
//# sourceMappingURL=HouseOfCats.js.map