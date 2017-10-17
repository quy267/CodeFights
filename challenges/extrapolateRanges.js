D = extrapolateRanges = S => {
    A = '';
    S.split(',').map(s => D[s] = 1);
    for (d in D) {
        A += A ? ',' + d : d
        for (i = d; D[i];) delete D[i++]
        if (d > 0) {
            A += --i - d ? '-' + i : ''
        } else {
            S = 0
        }
    }
};

console.log(D("5,10,11,20,21,12,13,100,1,2,3"));