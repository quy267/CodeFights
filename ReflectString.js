function reflectString(inputString) {
    let rtn = "";
    for (let i = 0; i < inputString.length; i++) {
        rtn += String.fromCharCode(219 - inputString[i].charCodeAt(0));

    }
    return rtn;
}

console.log(reflectString("name"));
