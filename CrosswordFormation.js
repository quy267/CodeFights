function crosswordFormation(words) {
    let result = 0;
    for (let i = 0; i < words.length; i++)
        for (let j = 0; j < words.length; j++)
            for (let k = 0; k < words.length; k++)
                for (let l = 0; l < words.length; l++)
                    if (i != j && i != k && i != l && j != k && j != l && k != l)
                        result += check(words[i], words[j], words[k], words[l]);
    return result;
}

function check(a, b, c, d) {
    let t = 0;
    for (let a1 = 0; a1 < a.length; a1++)
        for (let a2 = a1 + 2; a2 < a.length; a2++)
            for (let b1 = 0; b1 < b.length; b1++)
                for (let b2 = b1 + 2; b2 < b.length; b2++)
                    for (let c1 = 0; c1 < c.length; c1++)
                        for (let d1 = 0; d1 < d.length; d1++) {
                            let c2 = c1 + (a2 - a1);
                            let d2 = d1 + (b2 - b1);
                            if (c2 < c.length && d2 < d.length) {
                                if (a.charAt(a1) == b.charAt(b1) && a.charAt(a2) == d.charAt(d1) && c.charAt(c1) == b.charAt(b2) && c.charAt(c2) == d.charAt(d2))
                                    t++;
                            }
                        }
    return t;


}

console.log(crosswordFormation(["crossword", "square", "formation", "something"]));
