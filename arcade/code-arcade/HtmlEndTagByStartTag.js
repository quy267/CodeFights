function htmlEndTagByStartTag(startTag) {
    return "</" + startTag.slice(1, startTag.indexOf(" ")) + ">";
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));