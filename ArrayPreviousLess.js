function arrayPreviousLess(items) {
    let result = new Array();
    for (let i = 0; i < items.length; i++) {
        let substitute = -1;
        for (let j = 0; j < i; j++) {
            if (items[j] < items[i]) {
                substitute = items[j];
            }
        }
        result.push(substitute);
    }
    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
