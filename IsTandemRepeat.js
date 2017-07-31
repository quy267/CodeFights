function isTandemRepeat(inputString) {
    if (inputString.length % 2 != 0)
        return false;

    let word_limit = inputString.length / 2;
    return inputString.substr(0, word_limit) == inputString.substr(word_limit);
}

