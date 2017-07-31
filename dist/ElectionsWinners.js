"use strict";

function electionsWinners(votes, k) {
    var ma = 0;
    for (var i = 0; i < votes.length; i++) {
        ma = Math.max(ma, votes[i]);
    }var cnt = 0;
    for (var _i = 0; _i < votes.length; _i++) {
        if (votes[_i] + k > ma) {
            cnt++;
        }
    }if (cnt == 0) {
        for (var _i2 = 0; _i2 < votes.length; _i2++) {
            if (votes[_i2] == ma) cnt++;
        }if (cnt > 1) cnt = 0;
    }
    return cnt;
}
//# sourceMappingURL=ElectionsWinners.js.map