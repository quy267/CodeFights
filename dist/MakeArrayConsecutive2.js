"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function makeArrayConsecutive2(statues) {
    return Math.max.apply(Math, _toConsumableArray(statues)) - Math.min.apply(Math, _toConsumableArray(statues)) - statues.length + 1;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
//# sourceMappingURL=MakeArrayConsecutive2.js.map