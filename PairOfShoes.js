function pairOfShoes(shoes) {
    let shoes1 = new Array();
    let shoes2 = new Array();
    shoes.forEach(function (shoe) {
        let type = shoe[0], size = shoe[1];
        if (type == 0) {
            shoes1.push(size);
        } else {
            shoes2.push(size);
        }
    });

    shoes1.sort(function (a, b) {
        return a - b;
    });
    shoes2.sort(function (a, b) {
        return a - b;
    });
    if (shoes1.length != shoes2.length) {
        return false;
    }
    for (let i = 0; i < shoes1.length; i++) {
        if (shoes1[i] != shoes2[i]) {
            return false;
        }
    }
    return true;
}

console.log(pairOfShoes([[0, 21], [1, 23], [1, 21], [0, 23]]));
console.log(pairOfShoes([[0, 21], [1, 23], [1, 21], [1, 23]]));