function electionsWinners(votes, k) {
    let ma = 0;
    for (let i = 0; i < votes.length; i++)
        ma = Math.max(ma, votes[i]);
    let cnt = 0;
    for (let i = 0; i < votes.length; i++)
        if (votes[i] + k > ma) {
            cnt++;
        }
    if (cnt == 0) {
        for (let i = 0; i < votes.length; i++)
            if (votes[i] == ma) cnt++;
        if (cnt > 1) cnt = 0;
    }
    return cnt;
}
