function alphabetSubsequence(s) {
    let arr = new Array();
    for (let i = 0; i < s.length; i++) {
        arr[i] = s[i].charCodeAt(0) - "a".charCodeAt(0);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
