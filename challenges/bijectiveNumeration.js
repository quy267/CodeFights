function bijectiveNumeration(n, domain) {
    if (n % 99 == 0) {
        return domain[n / 99 - 1] + '-' + 99;
    }

    let result = domain[Math.floor(n / 99)] + '-';
    let tmp = n - Math.floor(n / 99) * 99;
    if (tmp < 10) {
        return result + '0' + tmp;
    }
    return result + '' + tmp;
}

console.log(bijectiveNumeration(n = 198, domain = ["MONKEYS", "PENGUINS", "ZEBRAS", "LIONS"]));