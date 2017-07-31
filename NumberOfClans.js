function numberOfClans(divisors, k) {
    let clans = [1];
    for (let i = 2; i <= k; i++) {
        let shouldAdd = true;
        for (let clan of clans) {
            if (isFriend(divisors, clan, i)) {
                shouldAdd = false;
                break;
            }
        }
        if (shouldAdd) {
            clans.push(i);
        }
    }
    return clans.length;
}

function isFriend(divisors, a, b) {
    for (let i = 0; i < divisors.length; i++) {
        if (!(a % divisors[i] == 0 && b % divisors[i] == 0) && !(a % divisors[i] != 0 && b % divisors[i] != 0))
            return false;
    }
    return true;
}

console.log(numberOfClans([2, 3], 6));