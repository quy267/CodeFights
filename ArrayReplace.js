function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(function (currentValue) {
        return currentValue == elemToReplace ? substitutionElem : currentValue;
    });
}

console.log(arrayReplace([1, 2, 1], 1, 3));
