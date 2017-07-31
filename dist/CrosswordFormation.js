"use strict";

function crosswordFormation(words) {
    var result = 0;
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            for (var k = 0; k < words.length; k++) {
                for (var l = 0; l < words.length; l++) {
                    if (i != j && i != k && i != l && j != k && j != l && k != l) result += check(words[i], words[j], words[k], words[l]);
                }
            }
        }
    }return result;
}

function check(a, b, c, d) {
    var t = 0;
    for (var a1 = 0; a1 < a.length; a1++) {
        for (var a2 = a1 + 2; a2 < a.length; a2++) {
            for (var b1 = 0; b1 < b.length; b1++) {
                for (var b2 = b1 + 2; b2 < b.length; b2++) {
                    for (var c1 = 0; c1 < c.length; c1++) {
                        for (var d1 = 0; d1 < d.length; d1++) {
                            var c2 = c1 + (a2 - a1);
                            var d2 = d1 + (b2 - b1);
                            if (c2 < c.length && d2 < d.length) {
                                if (a.charAt(a1) == b.charAt(b1) && a.charAt(a2) == d.charAt(d1) && c.charAt(c1) == b.charAt(b2) && c.charAt(c2) == d.charAt(d2)) t++;
                            }
                        }
                    }
                }
            }
        }
    }return t;
}

console.log(crosswordFormation(["crossword", "square", "formation", "something"]));
//# sourceMappingURL=CrosswordFormation.js.map