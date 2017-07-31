function mirrorBits(a) {
    var arr = parseInt(a, 10).toString(2).split('');
    arr.reverse();
    return parseInt(arr.join(''), 2);
}

console.log(mirrorBits(97));