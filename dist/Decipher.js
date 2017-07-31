"use strict";

function decipher(cipher) {
    var result = new String();
    while (cipher.length > 0) {
        var s = cipher.substr(0, 2);
        var n = parseInt(s);
        if (n >= 97) {
            result += String.fromCharCode(n);
            cipher = cipher.slice(2);
        } else {
            s = cipher.substr(0, 3);
            n = parseInt(s);
            result += String.fromCharCode(n);
            cipher = cipher.slice(3);
        }
    }
    return result;
}

console.log(decipher("10197115121"));
//# sourceMappingURL=Decipher.js.map