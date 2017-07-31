"use strict";

function numberOfClans(divisors, k) {
    var clans = [1];
    for (var i = 2; i <= k; i++) {
        var shouldAdd = true;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = clans[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var clan = _step.value;

                if (isFriend(divisors, clan, i)) {
                    shouldAdd = false;
                    break;
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

        if (shouldAdd) {
            clans.push(i);
        }
    }
    return clans.length;
}

function isFriend(divisors, a, b) {
    for (var i = 0; i < divisors.length; i++) {
        if (!(a % divisors[i] == 0 && b % divisors[i] == 0) && !(a % divisors[i] != 0 && b % divisors[i] != 0)) return false;
    }
    return true;
}

console.log(numberOfClans([2, 3], 6));
//# sourceMappingURL=NumberOfClans.js.map