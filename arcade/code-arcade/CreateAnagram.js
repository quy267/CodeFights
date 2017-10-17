function createAnagram(s, t) {
    let cnt1 = new Array(26).fill(0);
    let cnt2 = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        cnt1[s.charCodeAt(i) - 65]++;
        cnt2[t.charCodeAt(i) - 65]++;
    }
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        ans += Math.abs(cnt1[i] - cnt2[i]);
    }
    return ans / 2;
}

console.log(createAnagram("AABAA", "BBAAA"));