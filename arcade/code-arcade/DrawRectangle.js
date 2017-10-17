function drawRectangle(canvas, rectangle) {
    let y1 = rectangle[0], x1 = rectangle[1], y2 = rectangle[2], x2 = rectangle[3];
    canvas[x1][y1] = '*';
    canvas[x1][y2] = '*';
    canvas[x2][y1] = '*';
    canvas[x2][y2] = '*';
    for (let j = y1 + 1; j < y2; j++) {
        canvas[x1][j] = canvas[x2][j] = '-';

    }
    for (let i = x1 + 1; i < x2; i++) {
        canvas[i][y1] = canvas[i][y2] =  '|';
    }
    return canvas;
}

// console.log(drawRectangle([['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'], ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'], ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']], [1, 1, 4, 3]));
console.log(drawRectangle([["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["b", "b", "b", "b", "b", "b", "b", "b"]], [0, 2, 7, 3]));