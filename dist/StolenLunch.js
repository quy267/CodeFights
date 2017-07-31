'use strict';

function stolenLunch(note) {
    var result = new String();
    for (var i = 0; i < note.length; i++) {
        if ('0' <= note[i] && note[i] <= '9') {
            result += String.fromCharCode(parseInt(note[i]) + 97);
        } else if ('a' <= note[i] && note[i] <= 'j') {
            result += (note[i].charCodeAt(0) - 97).toString();
        } else {
            result += note[i];
        }
    }
    return result;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
//# sourceMappingURL=StolenLunch.js.map