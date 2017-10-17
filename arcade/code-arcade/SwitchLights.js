function switchLights(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 1) {
            for (let j = 0; j <= i; j++) {
                a[j] = 1 - a[j];
            }
        }
    }
    return a;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
