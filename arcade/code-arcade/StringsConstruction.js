function stringsConstruction(a, b) {
    var count = 0;
    var ok = true;

    do {
        for (var i = 0; i < a.length && ok; i++) {
            var ch = a.charAt(i);
            var j = b.indexOf(ch);
            if (j === -1) {
                ok = false;
            }
            else {
                b = b.substring(0, j) + b.substring(j + 1);
            }
        }
        if (ok) {
            count++;
        }
    } while (ok);

    return count;
}

console.log(stringsConstruction("abc", "abccba"));