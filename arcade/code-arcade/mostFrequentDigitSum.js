function mostFrequentDigitSum(n) {
    let m = n, counter = new Map();
    while (m > 0) {
        let reduce = sumDigits(m);
        if (!counter.has(reduce)) {
            counter.set(reduce, 0);
        } else {
            counter.set(reduce, counter.get(reduce) + 1);
        }
        m = m - reduce
    }
    let max = 0, maxCount = 0;
    for (let [key, value] of counter) {
        if (value > maxCount) {
            max = key;
            maxCount = value;
        } else if (value == maxCount) {
            if (key > max) {
                max = key;
            }
        }
    }
    return max;
}

function sumDigits(number) {
    let str = number.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str.charAt(i), 10);
    }
    return sum;
}

console.log(mostFrequentDigitSum(8));
console.log(mostFrequentDigitSum(88));