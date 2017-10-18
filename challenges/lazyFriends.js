lazyFriends = (houses, maxDist) => houses.map(currentValue => houses.filter(value => Math.abs(currentValue - value) <= maxDist).length - 1);


console.log(lazyFriends(houses = [1, 2, 4, 8, 10], maxDist = 5));
