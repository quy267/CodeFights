function isCaseInsensitivePalindrome(inputString) {
    let r = inputString.split('').reverse().join('');
    return inputString.toLowerCase() == r.toLowerCase();
}


console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abcdcbA"))