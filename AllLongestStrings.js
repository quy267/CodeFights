function allLongestStrings(inputArray) {
    let l = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length == l);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
