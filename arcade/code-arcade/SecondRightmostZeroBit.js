function secondRightmostZeroBit(n) {
    return fun(n);

}

function fun(n) {
    let arr = parseInt(n, 10).toString(2).split('');
    arr.reverse();
    let m = 0, i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            m++;
        }
        if (m == 2) {
            break;
        }
    }
    return (Math.pow(2, i));
}

console.log(secondRightmostZeroBit(37));