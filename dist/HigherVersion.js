'use strict';

function higherVersion(ver1, ver2) {
    var s1 = ver1.split('.');
    var s2 = ver2.split('.');
    for (var i = 0; i < Math.min(s1.length, s2.length); i++) {
        if (parseInt(s1[i]) > parseInt(s2[i])) return true;else if (parseInt(s1[i]) < parseInt(s2[i])) return false;
    }
    return false;
}

console.log(higherVersion("1.2.2", "1.2.0"));
console.log(higherVersion("1.0.5", "1.1.0"));
//# sourceMappingURL=HigherVersion.js.map