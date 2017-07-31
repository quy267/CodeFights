function decipher(cipher) {
    let result = new String();
    while (cipher.length > 0) {
        let s = cipher.substr(0, 2);
        let n = parseInt(s);
        if (n >= 97) {
            result += String.fromCharCode(n);
            cipher = cipher.slice(2);
        } else {
            s = cipher.substr(0, 3);
            n = parseInt(s);
            result += String.fromCharCode(n);
            cipher = cipher.slice(3);
        }
    }
    return result;
}

console.log(decipher("10197115121"));
