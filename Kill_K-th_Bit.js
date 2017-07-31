function killKthBit(n, k) {
    return fun(n, k);
}

function fun(num, kth) {
    var arr = parseInt(num, 10).toString(2).split('');
    arr[arr.length - kth] = '0';
    return parseInt(arr.join(''), 2);
}

console.log(killKthBit(37, 3));
