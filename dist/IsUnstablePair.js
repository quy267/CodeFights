"use strict";

function isUnstablePair(filename1, filename2) {
    var filename1_lessthan_2 = filename1.toLowerCase() < filename2.toLowerCase();
    return filename1 < filename2 != filename1_lessthan_2;
}

console.log(isUnstablePair("fdsAs", "dzdw"));
//# sourceMappingURL=IsUnstablePair.js.map