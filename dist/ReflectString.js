"use strict";

function reflectString(inputString) {
    var rtn = "";
    for (var i = 0; i < inputString.length; i++) {
        rtn += String.fromCharCode(219 - inputString[i].charCodeAt(0));
    }
    return rtn;
}

console.log(reflectString("name"));
//# sourceMappingURL=ReflectString.js.map