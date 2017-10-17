function appleBoxes(k) {
    let yellow = 0, red = 0;
    for (let i = 1; i <= k; i++) {
        if (i % 2 == 1) {
            yellow = yellow + i * i;
        }
        else {
            red = red + i * i;
        }
    }
    return red - yellow;
}

console.log(appleBoxes(5));

