"use strict";

function cipher26(message) {
    var result = new String();
    var sub = 0,
        prev = 0;
    for (var i = 0; i < message.length; i++) {
        var t = message[i].charCodeAt(0) - 97;
        sub = t - prev;
        if (sub < 0) sub = sub + 26;
        result += String.fromCharCode(sub + 97);
        prev = t;
    }
    return result;
}

console.log(cipher26("taiaiaertkixquxjnfxxdh"));
//# sourceMappingURL=Cipher26.js.map