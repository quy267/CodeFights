function houseNumbersSum(inputArray) {
    let result = 0, index = 0;
    while (index < inputArray.length) {
        if (inputArray[index] == 0) {
            return result;
        } else {
            result = result + inputArray[index];
        }
        index++;
    }
    return result;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
