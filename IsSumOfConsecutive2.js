function isSumOfConsecutive2(n) {
    let result = 0;
    let number,start;
    for (let i = 1; i < n; i++) {
        number = n;
        start = i;
        while (number > 0) {
            number -=start;
            start++
        }
        if (number ==0) {
            result++;
        }
    }
    return result;
}

console.log(isSumOfConsecutive2(9));
console.log(isSumOfConsecutive2(8));