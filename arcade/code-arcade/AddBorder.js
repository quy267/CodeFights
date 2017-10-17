function addBorder(picture) {
    let answer = new Array();
    let decoratedRow = "";
    for (let i = 0; i < picture[0].length + 2; i++) {
        decoratedRow += "*";
    }
    answer.push(decoratedRow);
    for (let i = 0; i < picture.length; i++) {
        let row = "*";
        for (let j = 0; j < picture[0].length; j++) {
            row += picture[i][j];
        }
        row += "*";
        answer.push(row);
    }
    answer.push(decoratedRow);
    return answer;
}

console.log(addBorder(["abc", "ded"]));
