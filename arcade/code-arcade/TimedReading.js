function timedReading(maxLength, text) {
    let count = 0;
    let status = 0;
    let wordLength = 0;
    for(let i=0; i<text.length; ++i) {
        let c = text.charAt(i);
        if(("a" <= c && c <= "z") || ("A" <= c && c <= "Z")) {
            if(status == 0) {
                wordLength = 1;
                status = 1;
            }
            else if(status == 1) {
                wordLength++;
                if(wordLength > maxLength) {
                    status = 2;
                }
            }
        }
        else {
            if(status == 1) {
                count++;
                status = 0;
            }
            else if(status == 2) {
                status = 0;
            }
        }
    }
    if(status == 1) {
        count++;
    }
    return count;
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"));