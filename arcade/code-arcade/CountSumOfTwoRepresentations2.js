function countSumOfTwoRepresentations2(n, l, r) {
    return Math.max(Math. min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
}

// console.log(countSumOfTwoRepresentations2(93, 24, 58));
console.log(countSumOfTwoRepresentations2(10, 9, 11));