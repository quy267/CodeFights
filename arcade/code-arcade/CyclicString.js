function cyclicString(s) {
    for (let i = 1;i<=s.length;i++) {
        let part = s.substr(0,i);
        let isRoot = true;
        for (let j = 0;j<s.length;j++) {
            if (s[j] != part[j % part.length]) {
                isRoot = false;
                break;
            }
        }
        if (isRoot) {
            return i;
        }
    }
    return 0;
}

console.log(cyclicString("cabca"));