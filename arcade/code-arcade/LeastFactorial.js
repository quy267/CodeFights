function leastFactorial(n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result = result * i;
        if (result >= n) {
            break;
        }
    }
    return result;
}

console.log(leastFactorial(17));