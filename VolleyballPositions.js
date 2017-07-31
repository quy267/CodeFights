function volleyballPositions(a, k) {

    var from = [[3,2], [1,2], [0,1], [1,0], [3,0], [2,1]];
    var to   = [[1,2], [0,1], [1,0], [3,0], [2,1], [3,2]];

    var n = from.length;

    for( var i=0; i<k%6; i++ ) {
        var first = a[from[0][0]][from[0][1]];
        for( var j=n-1; j>=1; j-- ) {
            a[to[j][0]][to[j][1]] = a[from[j][0]][from[j][1]];
        }
        a[to[0][0]][to[0][1]] = first;
    }
    return a;
}
