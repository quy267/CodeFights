function properNounCorrection(noun) {
    return noun[0].toUpperCase() + noun.substr(1).toLowerCase();
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
