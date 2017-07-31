function weakNumbers(n) {
    let result = new Array();
    let weakness = 0, weakest = 0;
    for (let index = 1; index <= n; index++) {
        let w = getWeakness(index);
        if (w > weakest) {
            weakest = w;
            weakness = 1;
        }
        else if (w == weakest)
            weakness++;
    }
    result.push(weakest);
    result.push(weakness);
    return result;
}

function getWeakness(n) {
    let count = 0;
    if (n == 1) return 0;
    let dN = getD(n);
    for (let i = 1; i < n; i++) {
        if (getD(i) > dN)
            count++;
    }
    return count;
}

function getD(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let count = 0;
    let halfN = n / 2;
    for (let i = 2; i <= halfN; i++) {
        if (n % i == 0) count++;
    }
    return count + 2;
}

console.log(weakNumbers(9));