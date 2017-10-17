function lazyFriends(houses, maxDist) {
    let result = [];
    houses.forEach((currentValue) => {
        let tmp = -1;
        for (let i = 0; i < houses.length; i++) {
            if (Math.abs(currentValue - houses[i]) <= maxDist) {
                tmp++
            }
        }
        result[result.length] = tmp;
    });
    return result;
}

console.log(lazyFriends(houses = [1, 2, 4, 8, 10], maxDist = 5));
