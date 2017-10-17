function newNumeralSystem(number) {
    let n = number.charCodeAt(0) - 65;
    let result = new Array();
    for (let i = 0; i <= n / 2; i++) {
        result.push(`${String.fromCharCode(i + 65)} + ${String.fromCharCode(n - i + 65)}`);
    }
    return result;
}
