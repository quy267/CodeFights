function rectangleRotation(a, b) {
    let sqr = x => x * x;
    let answer = 0;
    for (let x = -a - b; x <= a + b; x++) {
        for (let y = -a - b; y <= a + b; y++) {
            if (2 * sqr(x - y) <= sqr(a) && 2 * sqr(x + y) <= sqr(b)) {
                answer++;
            }
        }
    }
    return answer;
}

console.log(rectangleRotation(6, 4));
