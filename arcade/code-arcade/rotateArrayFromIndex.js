Array.prototype.rotate = (function () {
    // save references to array functions to make lookup faster
    var push = Array.prototype.push,
        splice = Array.prototype.splice;

    return function (count) {
        var len = this.length >>> 0, // convert to uint
            count = count >> 0; // convert to int

        // convert count to value in range [0, len)
        count = ((count % len) + len) % len;

        // use splice.call() instead of this.splice() to make function generic
        push.apply(this, splice.call(this, 0, count));
        return this;
    };
})();


function rotateArrayFromIndex(values, start, end) {
    let n = values.length;

    if (start == end) {
        return values;
    }

    if (end > n - 1) {
        end = n - 1;
    }

    if (start > n - 1) {
        start = n - 1;
    }
    let arr = new Array();
    let rotate = (arr, n) => {
        let L = arr.length;
        return arr.slice(L - n).concat(arr.slice(0, L - n));
    };

    if (start < end) {
        arr = values.slice(start, end + 1);
        arr = arr.rotate(end - start-1);

    }
    else if (start > end) {
        arr = values.slice(end, start + 1);
        arr = arr.rotate(end - start - 1);
    }
}

console.log(rotateArrayFromIndex([1, 2, 3], 0, 2));
// console.log(rotateArrayFromIndex([1, 2, 3], 1, 3));
// console.log(rotateArrayFromIndex([1, 5, 9, 2, 11, 84, 2], 19, 0));