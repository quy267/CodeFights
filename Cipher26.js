function cipher26(message) {
    let result = new String();
    let sub = 0, prev = 0;
    for (let i = 0; i < message.length; i++) {
        let t = message[i].charCodeAt(0) - 97;
        sub = t - prev;
        if (sub < 0) sub = sub + 26;
        result += String.fromCharCode(sub + 97);
        prev = t;
    }
    return result;
}

console.log(cipher26("taiaiaertkixquxjnfxxdh"));