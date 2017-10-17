function removeArrayPart(inputArray, l, r) {
    inputArray.splice(l, r - l + 1);
    return inputArray;
}

console.log(removeArrayPart([2, 3, 2, 3, 4, 5], 2, 4));
