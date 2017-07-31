function combs(comb1, comb2) {
    let ok = (c1, c2) => {
        for (let i = 0; i < Math.min(c1.length, c2.length); i++)
            if (c1[i] == '*' && c2[i] == '*') return false;
        return true;
    };
    let s1 = comb1;
    let s2 = comb2;
    while (!ok(s1, s2)) s2 = "." + s2;
    let min = Math.max(s1.length, s2.length);
    s1 = comb1;
    s2 = comb2;
    while (!ok(s1, s2)) s1 = "." + s1;
    if (min < Math.max(s1.length, s2.length)) return min;
    else return Math.max(s1.length, s2.length);
}
