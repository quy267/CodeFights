"use strict";

function createAnagram(s, t) {
    var cnt1 = new Array(26).fill(0);
    var cnt2 = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        cnt1[s.charCodeAt(i) - 65]++;
        cnt2[t.charCodeAt(i) - 65]++;
    }
    var ans = 0;
    for (var _i = 0; _i < 26; _i++) {
        ans += Math.abs(cnt1[_i] - cnt2[_i]);
    }
    return ans / 2;
}

console.log(createAnagram("AABAA", "BBAAA"));
//# sourceMappingURL=CreateAnagram.js.map