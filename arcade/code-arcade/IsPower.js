function isPower(n) {
    if (n == 1)
        return true;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        for (let power = 2; power <= Math.sqrt(n); power++) {
            if (Math.pow(index, power) == n)
                return true;
        }
    }
    return false;
}

console.log(isPower(125));
console.log(isPower(72));