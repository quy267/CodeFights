function alphanumericLess(s1, s2) {
    let s1WithoutZeroes = s1.replaceAll("0", "");
    let s2WithoutZeroes = s2.replaceAll("0", "");
    if (!s1WithoutZeroes && !s2WithoutZeroes) {
        return false;
    }
    let compareIgnoringZeroes = s1WithoutZeroes.localeCompare(s2WithoutZeroes);

    if (compareIgnoringZeroes < 0) {
        return true;
    } else if (compareIgnoringZeroes > 0) {
        return false;
    }
    if (s1.length == s2.length) {
        return false;
    }
    return true;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

console.log(alphanumericLess("a", "a1"));