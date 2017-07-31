"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function mostFrequentDigitSum(n) {
    var m = n,
        counter = new Map();
    while (m > 0) {
        var reduce = sumDigits(m);
        if (!counter.has(reduce)) {
            counter.set(reduce, 0);
        } else {
            counter.set(reduce, counter.get(reduce) + 1);
        }
        m = m - reduce;
    }
    var max = 0,
        maxCount = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = counter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            if (value > maxCount) {
                max = key;
                maxCount = value;
            } else if (value == maxCount) {
                if (key > max) {
                    max = key;
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return max;
}

function sumDigits(number) {
    var str = number.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str.charAt(i), 10);
    }
    return sum;
}

console.log(mostFrequentDigitSum(8));
console.log(mostFrequentDigitSum(88));
//# sourceMappingURL=mostFrequentDigitSum.js.map